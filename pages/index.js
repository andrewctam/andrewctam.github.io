import Layout from '../components/Layout'
import ProjectBox from '../components/ProjectBox'
import SmallProjectBox from '../components/SmallProjectBox'

const Home = () => {
    return (
        <Layout>
            <div className='p-6 text-center w-full bg-gradient-to-r bg-sky-200 text-black text-md md:text-lg'>
                <p>Welcome to my portfolio website! I am a Junior studying Computer Science and Applied Math and Statistics at Stony Brook University</p>
                <p>You can see some of my personal projects below</p>
            </div>


            <div className="grid grid-cols-1 sm:w-3/4 mx-auto gap-8 my-10">
                <ProjectBox
                    title="Matrix Generator"
                    description="Full stack web app for quickly creating matrices and exporting them to text. Many additional features and the ability to save data online or locally."
                    technologies="Typescript, React, Next.js, Bootstrap, Docker, FastAPI, PostgreSQL, Docker"
                    link="./MatrixGenerator"
                    projectLink="https://matrixgen.web.app"
                    github = "https://github.com/tamandrew/matrix-gen"
                    imgSrc="/matrix.png"
                    bkColor="bg-gradient-to-r from-blue-200 to-sky-100"
                />

                <ProjectBox
                    title="Crowd Poll"
                    description="Full stack web app for creating crowd sourced polls. Users can add their own answer options and vote for their favorites."
                    technologies="Typescript, MongoDB, Express, React, Node.js, Tailwind CSS, Docker"
                    link="./CrowdPoll"
                    projectLink="https://crowdpolls.web.app"
                    github = "https://github.com/tamandrew/CrowdPoll"
                    imgSrc="/crowdpoll.png"
                    bkColor="bg-gradient-to-r from-orange-200 to-amber-100"
                />

          

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <SmallProjectBox
                        title="Color Identifier"
                        description="Identifies the RGB values of the pixels in an uploaded or pasted image."
                        technologies="React, Next.js, Tailwind CSS"
                        link="./ColorIdentifier"
                        projectLink="https://coloridentifier.web.app"
                        github = "https://github.com/tamandrew/color-identifier"
                        imgSrc="/color.png"
                        bkColor="bg-gradient-to-b from-pink-200 to-rose-200"
                    />

                    <SmallProjectBox
                        title="Schedule App"
                        description="Stores a schedule and shows the time until the next class. Also provides a quick way to enter zoom meetings for online classes."
                        technologies="React"
                        link="./TriangulationCalculator"
                        projectLink="https://andrewtam.org/schedule"
                        github = "https://github.com/tamandrew/schedule"
                        imgSrc="/schedule.png"
                        bkColor="bg-gradient-to-b from-lime-100 to-green-100"
                    />

                    <SmallProjectBox
                        title="Triangulation Calculator"
                        description="Allows the user to click in points of a polygon, and then displays the number of unique triangulations of the polygon."
                        technologies="React, Tailwind CSS"
                        link="./TriangulationCalculator"
                        projectLink="https://triangulation-calculator.web.app/"
                        github = "https://github.com/tamandrew/triangulations-calculator"
                        imgSrc="/triangulations.png"
                        bkColor="bg-gradient-to-b from-blue-100 to-sky-100"
                    />

                    <SmallProjectBox
                        title="Point in Monotone Polygon"
                        description="Allows the user to click in points of a polygon, and displays step by step directions for determining if a point is inside an X-Monotone polygon."
                        technologies="React, Tailwind CSS"
                        link="./TriangulationCalculator"
                        projectLink="https://point-in-monotone-polygon.web.app/"
                        github = "https://github.com/tamandrew/point-in-monotone-polygon"
                        imgSrc="/monotone.png"
                        bkColor="bg-gradient-to-b from-amber-200 to-orange-200"
                    />

                </div>
            </div>

        </Layout>
    )
}

export default Home