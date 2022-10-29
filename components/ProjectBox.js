import Link from "next/link"

const ProjectBox = (props) => {
    return (
        <div className={`${props.bkColor} rounded-lg shadow-lg px-4 md:px-10 py-4 grid grid-cols-1 md:grid-cols-2 gap-6 w-full`}>

            <div className="w-full h-full grid items-center">
                <div>
                    <h2>
                        <a rel="noreferrer" target="_blank" href={props.projectLink} className="text-3xl text-black">{props.title}</a>
                    </h2>
                    <p className="text-lime-700 mt-1 mb-6">{props.technologies}</p>
                    <p>{props.description}</p>
                    <a className="text-sky-800 text-sm" href={props.github} target="_blank" rel="noreferrer" >
                        GitHub Repository
                    </a>
                </div>

                <Link href={props.link}>
                    <button className={"text-slate-700 bg-slate-200/50 mt-4 p-2 w-fit h-fit border border-black rounded bg-sky-5`0 hover:-translate-y-1 hover:scale-101 duration-100"}>Learn More →</button>
                </Link>

            </div>


            <div className="w-full h-full">
                <a rel="noreferrer" target="_blank" href={props.projectLink}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={props.imgSrc} alt={props.title} className="my-4 rounded-xl" />
                </a>
            </div>



        </div>
    )
}

export default ProjectBox