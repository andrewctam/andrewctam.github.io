import Layout from "./Layout"
import { useRouter } from "next/router"

export type DemoImage = {
    src: string,
    caption: string
}


type ProjectPageProps = {
    title: string,
    description: string,
    githubLink: string,
    websiteLink: string,
    images: DemoImage[],
    technologies: string,
    latestCommitSHA: string,
    commitAdditions: number,
    commitDeletions: number

}

const ProjectPage = (props: ProjectPageProps) => {

    const router = useRouter();

    return (
        <Layout>
            <button 
                onClick={() => router.back()}
                className="fixed top-4 left-4 px-4 py-1 bg-white hover:bg-gray-100 rounded border border-black/10 shadow-md">
                Back
            </button>

            <h1 className = "text-3xl font-semibold mt-14 mb-2 ml-4 md:ml-10">
                {props.title}
            </h1>
        
            <div className = "bg-white shadow-md rounded p-4 md:px-10 md:py-4">
                {props.description}
            </div>


            <h2 className = "text-3xl font-semibold mt-8 mb-2 ml-4 md:ml-10">
                Technologies
            </h2>
        
            <div className = "bg-white shadow-md rounded p-4 md:px-10 md:py-4">
                {props.technologies}
            </div>

            <h2 className = "text-3xl font-semibold mt-8 mb-2 ml-4 md:ml-10">
                Latest Commit
            </h2>
        
            <div className = "bg-white shadow-md rounded p-4 md:px-10 md:py-4">
                {"Commit "}
                <a href = {`${props.githubLink}/commit/${props.latestCommitSHA}`} 
                    target = "_blank" 
                    rel = "noreferrer"
                    className = "text-sky-600">

                    {props.latestCommitSHA}
                </a>
                {" with "}
                <span className = "text-green-600">
                    {` ${props.commitAdditions} addition${props.commitAdditions === 1 ? "" : "s"}`}
                </span>
                ,
                <span className = "text-red-600">
                    {` ${props.commitDeletions} deletion${props.commitDeletions === 1 ? "" : "s"}`}
                </span>
            </div>

            {props.images.length > 0 ?
                <h1 className = "text-3xl font-semibold mt-14 mb-2 ml-4 md:ml-10">
                    Images
                </h1>
            : null}

            {props.images.map((image) => {
                return (
                    <>
                    <img src = {image.src} 
                        className="w-full mx-auto rounded-lg shadow-md"
                        alt={`${props.title} demo`}
                    />
                    <p className = "text-center mt-1 mb-16">
                        {image.caption}
                    </p>
                </>
                )
            })}
            
        </Layout>
    )
    
}


export type GitHubPayload = {
    latestCommitSHA: string,   
    additions: number,
    deletions: number
}

export const fetchGitHubData = async (repo: string): Promise<GitHubPayload> => {
    const GITHUB_API_KEY = process.env.GITHUB_API_KEY;

    const query = `
    query($repo: String!) {
        repository(owner: "tamandrew", name: $repo) {
            object(expression: "main") {
                ... on Commit {
                    history(first: 1) {
                        edges {
                            node {
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
        latestCommitSHA: data.oid,
        additions: data.additions,
        deletions: data.deletions
    }
}

export default ProjectPage