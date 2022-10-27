
import Layout from "../components/Layout"
import ProjectPage from "../components/ProjectPage"
const CrowdPoll = (props) => {
    return <Layout>
          <ProjectPage
            title = "Crowd Poll"
            github = "https://github.com/tamandrew/CrowdPoll"
            link = "https://crowdpolls.web.app"
            src = {"./crowdpolldemo.mp4"}
            bkColor = "bg-gradient-to-r from-orange-200 to-amber-100"
            features = {[
                {
                    "caption": "Create a poll with a title and share it with a link",
                    "time": 0
                },

                {
                    "caption": "Users can add their own answer options",
                    "time": 8
                },

                {
                    "caption": "Vote on multiple options that you like",
                    "time": 17
                },

                {
                    "caption": "Setting to temporarily disable voting",
                    "time": 26
                },

                {
                    "caption": "Setting to hide vote count",
                    "time": 31
                },

                {
                    "caption": "Setting to limit everyone to one vote at a time",
                    "time": 43
                },

                {
                    "caption": "Setting to require owner approval for new answer options",
                    "time": 57
                },

                {
                    "caption": "Owner can delete answer options",
                    "time": 93
                },

                {
                    "caption": "Owner can delete the entire poll",
                    "time": 103
                },
                
            ]}
        />
    </Layout>
}
export default CrowdPoll