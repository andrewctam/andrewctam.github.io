import { GetServerSideProps } from "next";
import ProjectPage, { DemoImage, fetchGitHubData } from "../../components/ProjectPage";
import { GitHubPayload } from "./conditionalurl";

export const getServerSideProps: GetServerSideProps<GitHubPayload> = async () => {
    return {
        props: fetchGitHubData("ChirpBoards")
    };
}

const images: DemoImage[] = [
    {
        src: "https://raw.githubusercontent.com/tamandrew/ChirpBoards/main/demo.png",
        caption: "Home Page"
    }
]

const ChirpBoardsPage = (props: GitHubPayload) => {
    return (
        <ProjectPage
            title = "Chirp Boards"
            description="Chirp Boards is a full stack social media app that is similar to Twitter and Reddit. Like Twitter, users can chirp out short status messages up to 500 characters long. Users can also rechir other users' chirps. Each chirp opens to a forum board like Reddit where users can comment and upvote/downvote posts."
            githubLink="https://github.com/tamandrew/ChirpBoards"
            websiteLink="https://chirpboards.web.app"
            images={images}
            technologies="Java Spring Boot, GraphQL, MySQL, Azure Blob Storage, TypeScript, React, Tailwind CSS"
            latestCommitSHA={props.latestCommitSHA}
            commitAdditions={props.additions}
            commitDeletions={props.deletions}
        />
    )
}

export default ChirpBoardsPage