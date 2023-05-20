import { GetServerSideProps } from "next";
import ProjectPage, { DemoImage, fetchGitHubData } from "../../components/ProjectPage";
import { GitHubPayload } from "./conditionalurl";

export const getServerSideProps: GetServerSideProps<GitHubPayload> = async () => {
    return {
        props: fetchGitHubData("ChirpBoards")
    };
}

const features = [
    "Users can create an account and log in to interact with other users. They can create a display name, profile picture, and a user color that is seen on certain elements of the site",
    "Chirps can be created up to 500 characters long, and attached with an optional image, which are stored in Azure Blob Storage",
    "Chirps can be edited or deleted by the user who created them. Edited chirps are marked with an edited tag.",
    "Following: Users can follow other users to see their posts on their Following feed on the home page",
    "Rechirping: Chirps can be rechirped, which will show on a user's profile page feed and on the Following feed",
    "Voting: Upvotes increase the score by 1, and downvotes decrease the score by 1. Popular chirps with the highest scores in the past 24 hours are shown on the Trending Feed on the home page",
    "Commenting: Chirps can be commented on, where each comment is itself a post which makes chirps and comments (and their comments) a recursive structure. Comments can not have images, but also have no character limit",
    "Pinning: One chirp can be pinned on a user's profile feed, which will always show up at the top of the feed",
]

const images: DemoImage[] = [
    {
        src: "https://raw.githubusercontent.com/tamandrew/ChirpBoards/main/demo.png",
        caption: "Home Page"
    },
    {
        src: "https://raw.githubusercontent.com/tamandrew/ChirpBoards/main/profile.png",
        caption: "Profile"
    }
]


const ChirpBoardsPage = (props: GitHubPayload) => {
    return (
        <ProjectPage
            title = "Chirp Boards"
            description="Chirp Boards is a full stack social media app that is similar to Twitter and Reddit. Like Twitter, users can chirp out short status messages up to 500 characters long. Users can also rechir other users' chirps. Each chirp opens to a forum board like Reddit where users can comment and upvote/downvote posts."
            features={features}
            githubLink="https://github.com/tamandrew/ChirpBoards"
            websiteLink="https://chirpboards.web.app"
            images={images}
            technologies="GraphQL, Spring Boot, MySQL, Azure Blob Storage, TypeScript, TailwindCSS, React"
            latestCommitSHA={props.latestCommitSHA}
            commitAdditions={props.additions}
            commitDeletions={props.deletions}
        />
    )
}

export default ChirpBoardsPage