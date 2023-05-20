import { GetStaticProps } from "next";
import ProjectPage, { DemoImage, GitHubPayload, fetchGitHubData } from "../../components/ProjectPage";

type PageProps = {
    recentCommit: GitHubPayload
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    return {
        props: {
            recentCommit: await fetchGitHubData("conditional-url")
        },
        revalidate: 60
    };
}

const features = [
    "Conditional URLs can be redirect a shortened URL other URLs based on conditions",
    "Conditions can be built from combinations of 12 different conditionals, and can be joined with logical AND/OR operators",
    "Users can create conditional URLs logged out, or they can create an account",
    "If logged in, users can edit, delete, or rename their URLs",
    "Logged in users are also provided with analytics detailing statistics about their URLs click rate and demographics (colletced from the conditionals). Redis is used to cache recently accessed analytics to reduce the number of database calls"
]

const images: DemoImage[] = [
    {
        src: "https://raw.githubusercontent.com/tamandrew/conditional-url/main/demo.png",
        caption: "URL Builder (Logged Out)"
    },
    {
        src: "https://raw.githubusercontent.com/tamandrew/conditional-url/main/analytics.png",
        caption: "Logged in with Analytics View"
    }
]

const ConditionalURLPage = (props: PageProps) => {
    return (
        <ProjectPage
            title = "Conditional URL"
            description="Conditional URL is a URL shortener that creates a shortened URL that conditionally redirects visitors to different URLs based on specified conditions. The user can create URLs as a guest, or create an account to later edit/rename their URL and view detailed analytics. The RESTful API runs serverless using Microsoft Azure Functions."
            features={features}
            githubLink="https://github.com/tamandrew/conditional-url"
            websiteLink="https://conditionalurl.web.app"
            images = {images}
            technologies="Azure Functions, MongoDB, Redis, TypeScript, TailwindCSS, Vue"
            recentCommit={props.recentCommit}
        />
    )
}

export default ConditionalURLPage