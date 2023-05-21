import { GetStaticProps } from "next";
import ProjectPage, { DemoImage, GitHubPayload, fetchGitHubData } from "../../components/ProjectPage";

type PageProps = {
    recentCommit: GitHubPayload
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    return {
        props: {
            recentCommit: await fetchGitHubData("ChirpBoards")
        },
        revalidate: 60
    };
}

const images: DemoImage[] = [
    {
        src: "/chirpboards-home.png",
        caption: "Home Page"
    },
    {
        src: "/chirpboards-profile.png",
        caption: "Profile"
    }
]


const ChirpBoardsPage = (props: PageProps) => {
    return (
        <ProjectPage
            title = "Chirp Boards"
            description="Chirp Boards is a full stack social media app that is similar to Twitter and Reddit. Like Twitter, users can chirp out short status messages up to 500 characters long. Users can also rechir other users' chirps. Each chirp opens to a forum board like Reddit where users can comment and upvote/downvote posts."
            githubLink="https://github.com/tamandrew/ChirpBoards"
            websiteLink="https://chirpboards.web.app"
            images={images}
            technologies="GraphQL, Spring Boot, MySQL, Azure Blob Storage, TypeScript, TailwindCSS, React"
            recentCommit={props.recentCommit}
        >
            <ul className="list-disc ml-4">
                <li>Users can create an account and log in to interact with other users.</li>
                <li>Users can pick a display name (defaults to username), a user color that is seen on certain elements of the site (defaults to a randomly picked color), and a profile picture (if no profile picture is picked, a default one is used)</li>
                <li>Chirps can be created up to 500 characters long, and attached with an optional image, which are stored in Azure Blob Storage</li>
                    <ul className="list-disc ml-6">
                        <li>Chirps can be edited or deleted by the user who created them. Edited chirps are marked with an edited tag.</li>
                        <li>Rechirping: Chirps can be rechirped, which will show on a user's profile page feed and on the Following feed</li>
                        <li>Following: Users can follow other users to see their posts on their Following feed on the home page</li>
                        <li>Pinning: One chirp can be pinned on a user's profile feed, which will always show up at the top of the feed</li>
                    </ul>
                <li>Chirps can be opened into a separate page where it shows</li>
                    <ul className="list-disc ml-6">
                        <li>Voting: Upvotes increase the score by 1, and downvotes decrease the score by 1. Popular chirps with the highest scores in the past 24 hours are shown on the Trending Feed on the home page</li>
                        <li>Commenting: Chirps can be commented on, where each comment is itself a post which makes chirps and comments (and their comments) a recursive structure. Comments can not have images, but also have no character limit</li>
                    </ul>
            </ul>

        </ProjectPage>
    )
}

export default ChirpBoardsPage