import Layout from "../components/Layout"
import ProjectPage from "../components/ProjectPage"
const Matrix = (props) => {
    return <Layout>
       <ProjectPage
            title = "Matrix Generator"
            github = "https://github.com/tamandrew/matrix-gen"
            link = "https://matrixgen.web.app"
            src = {"./matrixdemo.mp4"}
            bkColor = "bg-gradient-to-r from-blue-200 to-sky-100"
            features = {[
                {
                    "caption": "Easily edit and resize matrices with an interactive interface",
                    "time": 0
                },

                {
                    "caption": "Create multiple matrices and swap between them",
                    "time": 8
                },

                {
                    "caption": "Select and edit an submatrix selection",
                    "time": 14
                },

                {
                    "caption": "Includes a matrix math calculator",
                    "time": 20
                },

                {
                    "caption": "Export your matrices to text",
                    "time": 25
                },

                {
                    "caption": "Import a matrix from text",
                    "time": 28
                },

                {
                    "caption": "Various settings to customize your experience",
                    "time": 35
                },

                {
                    "caption": "Many actions to manipulate your matrices",
                    "time": 45
                },

                {
                    "caption": "Save your matrices to local storage or online",
                    "time": 55
                },
                
            ]}
        />
    </Layout>
}
export default Matrix