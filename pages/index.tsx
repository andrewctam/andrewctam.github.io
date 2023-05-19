import Layout from '../components/Layout'
import ProfileLink from '../components/ProfileLink'
import ProjectBox from '../components/ProjectBox'

import { useState } from 'react'
import SmallProjectBox from '../components/SmallProjectBox'

const Home = () => {
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    return (
        <Layout>
            <div className="md:flex md:gap-8 mt-16">
                <div className="my-5 md:basis-1/4">
                    <img src = "./pfp.jpg" alt="Headshot photo of me" className = "my-2 rounded-full border border-black/50"/>
                </div>
                
                <div className="my-5 rounded-xl bg-white p-8 md:basis-3/4 flex flex-wrap align-center">
                    Hi! My name is Andrew, and I am a student at Stony Brook University double majoring in Computer Science and Applied Math!
                    <div className="w-full mt-5 rounded-xl flex flex-wrap items-center justify-center gap-4">
                        <ProfileLink
                            text="tamandrew"
                            link="https://github.com/tamandrew"
                            openInNewTab={true}
                            svg={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                </svg>
                            }
                        />

                        <ProfileLink
                            link="https://www.linkedin.com/in/andrewctam/"
                            text="andrewctam"
                            openInNewTab={true}
                            svg={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                    <path d="M8 11l0 5"></path>
                                    <path d="M8 8l0 .01"></path>
                                    <path d="M12 16l0 -5"></path>
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                </svg>
                            }
                        />

                        <ProfileLink
                            link="mailto:contact@andrewtam.org"
                            text="contact@andrewtam.org"
                            svg={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" strokeWidth="0" fill="currentColor"></path>
                                    <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" strokeWidth="0" fill="currentColor"></path>
                                </svg>
                            }
                        />
                    </div>

                </div>
            </div>



            <h2 className="text-4xl mt-16 ml-4 md:ml-10 text-black font-semibold">
                Experience
            </h2>
            

            <div className="w-full my-4 grid grid-cols-1 gap-8">
                <div className="bg-white border border-black/10 rounded-lg shadow-lg p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    Lorem Ipsum
                </div>
            </div>

            <h2 className="text-4xl mt-16 ml-4 md:ml-10 text-black font-semibold">
                Projects
            </h2>

            <h3 className="text-lg mt-2 ml-4 md:ml-10 text-black">
                These are some of the projects I have worked on to learn new technologies, to improve my skills, and for fun!
            </h3>

            <div className="w-full my-4 grid grid-cols-1 gap-8">
                <ProjectBox
                    title="Conditional URL"
                    description="Full stack serverless URL Shortener that redirects to different URLs based on 12 conditions, such as language, country, operating system, etc. Provides the owner with aggregate visitor data and redirect trends."
                    technologies="Azure Functions, MongoDB, Redis, TypeScript, TailwindCSS, Vue"
                    link="./CrowdPoll"
                    projectLink="https://conditionalurl.web.app"
                    githubLink="https://github.com/tamandrew/conditional-url"
                    imgSrc="/conditionalurl.png"
                />

                <ProjectBox
                    title="Chirp Boards"
                    description="Full stack Social media website combining Twitter and Reddit, where users can create posts with up to 500 characters and an optional image, with commenting, up and down voting, and post forwarding."
                    technologies="GraphQL, Spring Boot, MySQL, Azure Blob Storage, TypeScript, TailwindCSS, React"
                    link="./MatrixGenerator"
                    projectLink="https://chirpboards.web.app"
                    githubLink="https://github.com/tamandrew/ChirpBoards"
                    imgSrc="/chirpboards.png"
                />


                {!showMoreProjects ?
                    <div className="text-black text-xs -mt-4 rounded-xl shadow-md bg-white p-2 w-fit mx-auto cursor-pointer" onClick={() => setShowMoreProjects(true)}>
                        More Projects
                    </div>
                    :
                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-8">
                        <SmallProjectBox
                            title="Matrix Generator"
                            description="Full stack web app for quickly creating matrices and exporting them to text. Many additional features and the ability to save data online or locally."
                            technologies="TypeScript, React, Bootstrap, FastAPI, PostgreSQL"
                            projectLink="https://matrixgen.web.app"
                            githubLink="https://github.com/tamandrew/matrix-gen"
                        />

                        <SmallProjectBox
                            title="Crowd Poll"
                            description="Full stack web app for creating crowd sourced polls. Users can add their own answer options and vote for their favorites."
                            technologies="TypeScript, MongoDB, Express, React, Node.js, Tailwind CSS"
                            projectLink="https://crowdpolls.web.app"
                            githubLink="https://github.com/tamandrew/CrowdPoll"
                        />

                         <SmallProjectBox
                            title="Image Color Identifier"
                            description="A website that allows you to paste or upload an image, then select pixels to view their color codes using a responsive interface."
                            technologies="React, Tailwind CSS"
                            projectLink="coloridentifier.web.app/"
                            githubLink="https://github.com/tamandrew/color-identifier"
                        />

                        <SmallProjectBox
                            title="Schedule App"
                            description="Website that allows you to input a class schedule. Has daily/weekly schedule display that displays the current and next classes and can open zoom links if provided."
                            technologies="React"
                            projectLink="tamandrew.github.io/schedule/"
                            githubLink="https://github.com/tamandrew/schedule"
                        />

                        <SmallProjectBox
                            title="Physics Lab"
                            description="A Unity game that allows players to build their own physics labs. The game runs using WebGL in the browser. You can also save your labs and share it with a link, and opening the link will reconstruct the saved lab."
                            technologies="Unity, C#"
                            projectLink="tamandrew.github.io/PhysicsLab/app"
                            githubLink="https://github.com/tamandrew/PhysicsLab"
                        />
                    </div>
                }
            </div>


            <h2 className="text-4xl mt-16 ml-4 md:ml-10 text-black font-semibold">
                Significant School Projects
            </h2>

            <h3 className="text-lg mt-2 ml-4 md:ml-10 text-black">
                These are some significant homework assignments that I worked on at Stony Brook University. Due to Academic Honesty reasons, some projects do not have their code public. Please contact me if you are interested in seeing them and I may be provide it upon request.
            </h3>

            <div className = "grid grid-cols-1 my-4 md:grid-cols-2 gap-8">

                <SmallProjectBox
                    title="CSE 320 HW5"
                    description="CSE 320 HW5. A multithreaded game server that allows multiple players to play turn based games, with client connections handled through detatched threads for concurrency."
                    technologies="C (sockets, threads, mutexes)"
                />

                <SmallProjectBox
                    title="Crypto Tracker"
                    description="CSE 320 HW4. A tracker to monitor and store real-time crypto transactions from Bitstamp's WebSocket API, with concurrent monitoring of multiple data streams with fork and execvp syscalls to create processes."
                    technologies="C (fork, execvp, pipes, signals)"
                />


                <SmallProjectBox
                    title="Point in Monotone Polygon"
                    description="Extra credit project for CSE 355. A website that allows you to add points using your mouse to create a monotone polygon, then add a point and determine if the point is inside the polygon."
                    technologies="React, Tailwind CSS"
                    projectLink="https://point-in-monotone-polygon.web.app/"
                    githubLink="https://github.com/tamandrew/point-in-monotone-polygon"
                />
                <SmallProjectBox
                    title="Triangulation Calculator"
                    description="Extra credit project for CSE 355. A website that allows you to add points using your mouse to create a polygon, then calculate the number of distinct triangulations using a dynamic programming algorithm."
                    technologies="React, Tailwind CSS"
                    projectLink="https://triangulation-calculator.web.app/"
                    githubLink="https://github.com/tamandrew/triangulations-calculator"
                />
            </div>

        </Layout>
    )
}

export default Home