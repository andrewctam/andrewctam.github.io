
import { useRouter } from "next/router"
import Block from "./Block"

export type DemoImage = {
    src: string,
    caption: string
}

type ProjectPageProps = {
    children: React.ReactNode,
    title: string,
    description: string,
    githubLink: string,
    websiteLink: string,
    images: DemoImage[],
    technologies: string,
    repoInfo: GitHubPayload
}


const ProjectPage = (props: ProjectPageProps) => {
    const router = useRouter();

    return (
        <>
            <button 
                onClick={() => router.back()}
                className="fixed top-4 left-4 px-4 py-1 bg-white hover:bg-gray-100 rounded border border-black/10 shadow-md">
                Back
            </button>
        
            <Block heading={props.title} padding={true}>
                <div className = "mb-8">
                    {props.description}
                </div>

                {props.children}
            </Block>


            <Block heading={`Project Information`} padding={true}>
                <div>
                    {`Created on ${props.repoInfo.createDate}`}
                </div>
                <div>
                    {`Technologies: ${props.technologies}`}
                </div>
                <div>
                    {`Total Commits: ${props.repoInfo.totalCommits}`}
                </div>
                <div>
                    {"Recent Commit "}
                    <a href = {`${props.githubLink}/commit/${props.repoInfo.recentCommitSHA}`} 
                        target = "_blank" 
                        rel = "noreferrer"
                        className = "text-sky-600">

                        {props.repoInfo.recentCommitSHA}
                    </a>
                    {` on ${props.repoInfo.recentCommitDate} with `}
                    <span className = "text-green-600">
                        {` ${props.repoInfo.recentAdditions} addition${props.repoInfo.recentAdditions === 1 ? "" : "s"}`}
                    </span>
                    ,
                    <span className = "text-red-600">
                        {` ${props.repoInfo.recentDeletions} deletion${props.repoInfo.recentDeletions === 1 ? "" : "s"}`}
                    </span>
                </div>
            </Block>

            

            <Block heading="Links" padding={true}>
                <div>
                    {"GitHub Repo: "}
                    <a href = {props.githubLink} target = "_blank" rel = "noreferrer" className = "text-sky-600">
                        {props.githubLink} 
                    </a>
                </div>
                <div>
                    {"Website: "}
                    <a href = {props.websiteLink} target = "_blank" rel = "noreferrer" className = "text-sky-600">
                        {props.websiteLink} 
                    </a>
                </div>
            </Block>


            {props.images.length > 0 ?
                <Block heading="Images" opacity="0" padding={false}>
                    {props.images.map((image, index) => {
                        return (
                            <div key={`image ${index}`} className = "my-8">
                                <img src = {image.src} 
                                    className="w-full mx-auto rounded-lg shadow-md"
                                    alt={image.caption}
                                />
                                <p className = "text-center mt-1">
                                    {image.caption}
                                </p>
                            </div>
                        )
                    })}
                </Block>
            : null}
            
        </>
    )
    
}


export type GitHubPayload = {
    createDate: string,
    totalCommits: number,
    recentCommitDate: string,
    recentCommitSHA: string,   
    recentAdditions: number,
    recentDeletions: number
}

export const fetchGitHubData = async (repo: string): Promise<GitHubPayload> => {
    const GITHUB_API_KEY = process.env.GITHUB_API_KEY;

    if (!GITHUB_API_KEY) {
        return {
            createDate: "",
            totalCommits: 0,
            recentCommitDate: "",
            recentCommitSHA: "",
            recentAdditions: 0,
            recentDeletions: 0
        };
    }

    //fetch the most recent commit on the main branch
    const query = `
    query($repo: String!) {
        repository(owner: "tamandrew", name: $repo) {
            createdAt
            object(expression: "main") {
                ... on Commit {
                    history(first: 1) {
                        totalCount
                        edges {
                            node {
                                committedDate
                                oid
                                additions
                                deletions
                            }
                        }
                    }
                }
            }
        }
    }`

    const variables = {
        repo: repo
    }

    const res = await fetch(`https://api.github.com/graphql`, {
        method: "POST",
        headers: {
            "Authorization": `token ${GITHUB_API_KEY}`,
            "Accept": "application/vnd.github+json"
        }, 
        body: JSON.stringify({query, variables})
    })
    .then(res => res.json());

    const data = res.data.repository.object.history.edges[0].node;

    return {
        createDate: new Date(res.data.repository.createdAt).toLocaleDateString(),
        totalCommits: res.data.repository.object.history.totalCount,
        recentCommitDate: new Date(data.committedDate).toLocaleDateString(),
        recentCommitSHA: data.oid,
        recentAdditions: data.additions,
        recentDeletions: data.deletions
    }
}

export default ProjectPage