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
                    technologies="React, Node.js, Next.js, Bootstrap, Docker, FastAPI, PostgreSQL"
                    link="./MatrixGenerator"
                    projectLink="https://matrixgen.web.app"
                    github = "https://github.com/tamandrew/matrix-gen"
                    imgSrc="/matrix.png"
                    bkColor="bg-gradient-to-r from-blue-200 to-sky-100"
                />

                <ProjectBox
                    title="Crowd Poll"
                    description="Full stack web app for creating crowd sourced polls. Users can add their own answer options and vote for their favorites."
                    technologies="MongoDB, Express, React, Node.js, Tailwind CSS"
                    link="./CrowdPoll"
                    projectLink="https://crowdpolls.web.app"
                    github = "https://github.com/tamandrew/CrowdPoll"
                    imgSrc="/crowdpoll.png"
                    bkColor="bg-gradient-to-r from-orange-200 to-amber-100"
                />


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <SmallProjectBox
                        title="Color Identifier"
                        description="Website that identifies the RGB values of the pixels in an uploaded or pasted image."
                        technologies="React, Next.js, Tailwind CSS"
                        link="./ColorIdentifier"
                        projectLink="https://coloridentifier.web.app"
                        github = "https://github.com/tamandrew/color-identifier"
                        imgSrc="/color.png"
                        bkColor="bg-gradient-to-r from-red-100 to-rose-100"
                    />

                    <SmallProjectBox
                        title="Triangulation Calculator"
                        description="Website that counts the number of triangulations of a inputted polygon."
                        technologies="React, Tailwind CSS"
                        link="./TriangulationCalculator"
                        projectLink="https://triangulation-calculator.web.app/"
                        github = "https://github.com/tamandrew/triangulations-calculator"
                        imgSrc="/triangulations.png"
                        bkColor="bg-gradient-to-r from-neutral-200 to-slate-200"
                    />

                </div>
            </div>

        </Layout>
    )
}

export default Home