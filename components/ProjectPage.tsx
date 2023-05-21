
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
    recentCommit: GitHubPayload
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
        
            <Block heading={props.title} >
                <div className = "mb-8">
                    {props.description}
                </div>

                {props.children}
            </Block>

            <Block heading="Technologies" >
                {props.technologies}
            </Block>

            <Block heading="Links">
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

        
            <Block heading={`Recent Commit on ${props.recentCommit.date}`}>
                {"Commit "}
                <a href = {`${props.githubLink}/commit/${props.recentCommit.sha}`} 
                    target = "_blank" 
                    rel = "noreferrer"
                    className = "text-sky-600">

                    {props.recentCommit.sha}
                </a>
                {" with "}
                <span className = "text-green-600">
                    {` ${props.recentCommit.additions} addition${props.recentCommit.additions === 1 ? "" : "s"}`}
                </span>
                ,
                <span className = "text-red-600">
                    {` ${props.recentCommit.deletions} deletion${props.recentCommit.deletions === 1 ? "" : "s"}`}
                </span>
            </Block>

            {props.images.length > 0 ?
                <Block heading="Images" opacity="0.2">
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
    date: string,
    sha: string,   
    additions: number,
    deletions: number
}

export const fetchGitHubData = async (repo: string): Promise<GitHubPayload> => {
    const GITHUB_API_KEY = process.env.GITHUB_API_KEY;

    if (!GITHUB_API_KEY) {
        return {
            date: "",
            sha: "",
            additions: 0,
            deletions: 0
        };
    }

    //fetch the most recent commit on the main branch
    const query = `
    query($repo: String!) {
        repository(owner: "tamandrew", name: $repo) {
            object(expression: "main") {
                ... on Commit {
                    history(first: 1) {
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
        date: new Date(data.committedDate).toDateString(),
        sha: data.oid,
        additions: data.additions,
        deletions: data.deletions
    }
}

export default ProjectPage