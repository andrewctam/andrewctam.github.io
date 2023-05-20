import { GetServerSideProps } from "next";
import ProjectPage, { DemoImage, fetchGitHubData } from "../../components/ProjectPage";

export type GitHubPayload = {
    latestCommitSHA: string,   
    additions: number,
    deletions: number
}

export const getServerSideProps: GetServerSideProps<GitHubPayload> = async () => {
    return {
        props: fetchGitHubData("conditional-url")
    };
}

const images: DemoImage[] = [
    {
        src: "https://raw.githubusercontent.com/tamandrew/conditional-url/main/demo.png",
        caption: "URL Builder"
    },
    {
        src: "https://raw.githubusercontent.com/tamandrew/conditional-url/main/analytics.png",
        caption: "Logged in Analytics View"
    }
]

const ConditionalURLPage = (props: GitHubPayload) => {
    return (
        <ProjectPage
            title = "Conditional URL"
            description="Conditional URL is a URL shortener that creates a shortened URL that conditionally redirects visitors to different URLs based on specified conditions. The user can create URLs as a guest, or create an account to later edit/rename their URL and view detailed analytics. The RESTful API runs serverless using Microsoft Azure Functions."
            githubLink="https://github.com/tamandrew/conditional-url"
            websiteLink="https://conditionalurl.web.app"
            images = {images}
            technologies="Azure Functions, MongoDB, Redis, TypeScript, Vue 3, Tailwind CSS"
            latestCommitSHA={props.latestCommitSHA}
            commitAdditions={props.additions}
            commitDeletions={props.deletions}
        />
    )
}

export default ConditionalURLPage