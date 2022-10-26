import { useEffect, useRef, useState } from 'react';


const ProjectPage = (props) => {
    const vidRef = useRef(null)
    const [currentActive, setCurrentActive] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
            const currentTime = vidRef.current.currentTime

            for (let i = props.features.length - 1; i >= 0; i--) {
                if (currentTime >= props.features[i].time) {
                    setCurrentActive(i)
                    break
                }
            }
        }, 100)

        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        <div className="text-black text-semibold font-sans -col">
            <div className={`text-center p-4 font-semibold mb-8 ${props.bkColor}`}>
                <a target = "_blank" href = {props.link}><h1 className = "text-3xl">{props.title}</h1></a>
                
                <a className = "text-sky-700" href = {props.github} target = "_blank">
                    GitHub Repository
                </a>

                
            </div>



            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 rounded mx-16`}>
                
                <video ref={vidRef} autoPlay={true} controls className="mx-auto w-[95%] md:my-auto my-2">
                    <source src={props.src} type="video/mp4" />
                </video>
                

                <div className={`p-4 my-10 rounded-xl w-4/5 mx-auto ${props.bkColor}`}>
                    <p className="text-2xl text-center"> Feature Overview </p>
                    <p className = "text-sm text-gray-500 text-center"> Click on a feature to jump to that part of the video</p>

                    <ul className = "px-5">
                        {props.features.map((feature, i) => 
                            (
                                <li
                                    className={`py-1 list-disc cursor-pointer ${currentActive === i ? "text-red-800" : "text-black"}`}
                                    key={i}
                                    onClick={() => {
                                        vidRef.current.currentTime = feature.time
                                        setCurrentActive(i)
                                    }}
                                >
                                    {feature.caption}
                                </li>
                            )
                        )}

                    </ul>

                </div>

            </div>
        </div>
    )

}

export default ProjectPage