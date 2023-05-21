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


const images: DemoImage[] = [
    {
        src: "/conditionalurl-home.png",
        caption: "URL Builder (Logged Out)"
    },
    {
        src: "/conditionalurl-analytics.png",
        caption: "Logged in with Analytics View"
    }
]

const ConditionalURLPage = (props: PageProps) => {
    return (
        <ProjectPage
            title = "Conditional URL"
            description="Conditional URL is a URL shortener that creates a shortened URL that conditionally redirects visitors to different URLs based on specified conditions. The user can create URLs as a guest, or create an account to later edit/rename their URL and view detailed analytics. The RESTful API runs serverless using Microsoft Azure Functions."
            githubLink="https://github.com/tamandrew/conditional-url"
            websiteLink="https://conditionalurl.web.app"
            images = {images}
            technologies="Azure Functions, MongoDB, Redis, TypeScript, TailwindCSS, Vue"
            recentCommit={props.recentCommit}
        >
            <ul className="list-disc ml-4">
                <li>Conditional URLs can be redirect a shortened URL other URLs based on conditions</li>
                <li>Conditions can be built from combinations of 12 different conditionals, and can be joined with logical AND/OR operators</li>
                <ul className="list-disc ml-6">
                    <li>For example, users from the United States may be redirected to google.com, while users from Canada may be redirected to google.ca.</li>
                </ul>
                <li>Users can create conditional URLs logged out, or they can create an account</li>
                    <ul className="list-disc ml-6">
                        <li>If logged in, users can edit, delete, or rename their URLs</li>
                        <li>Logged in users are also provided with analytics detailing statistics about their URLs click rate and demographics (colletced from the conditionals). Redis is used to cache recently accessed analytics to reduce the number of database calls</li>
                    </ul>
            </ul>
        </ProjectPage>
    )
}

export default ConditionalURLPage