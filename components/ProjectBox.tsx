import Link from "next/link"

type ProjectBoxProps = {
    title: string,
    technologies: string,
    description: string,
    projectLink: string,
    githubLink: string,
    learnMoreLink: string,
    imgSrc: string,

}

const ProjectBox = (props: ProjectBoxProps) => {
    return (
        <div className="bg-gray-100 border border-black/10 rounded-lg shadow-lg p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

            <div>
                <div>
                    <a rel="noreferrer" target="_blank" href={props.projectLink}>
                        <h2 className="text-3xl text-black">
                            {props.title}
                        </h2>
                    </a>

                    <p className="text-sky-800 mt-1 mb-6">
                        {props.technologies}
                    </p>
                    
                    <p className = "mb-6">
                        {props.description}
                    </p>

                    <a rel="noreferrer" target="_blank" href={props.projectLink} className={"text-slate-700 shadow-md hover:bg-green-200 bg-green-200/50 mr-2 p-1 w-fit h-fit border border-black/50 rounded text-xs"}>
                        Website
                    </a>

                    <a rel="noreferrer" target="_blank" href={props.githubLink} className={"text-slate-700 shadow-md hover:bg-sky-200 bg-sky-200/50 mt-4 p-1 w-fit h-fit border border-black/50 rounded text-xs"}>
                        GitHub Repo
                    </a>
                </div>

                <Link href={props.learnMoreLink} >
                    <button className="text-slate-700 hover:bg-slate-200 bg-slate-200/50 shadow-md mt-16 p-2 w-fit h-fit border border-black/50 rounded">
                        Learn More
                    </button>
                </Link>
            </div>

            <a rel="noreferrer" target="_blank" href={props.projectLink} className="my-auto">
                <img src={props.imgSrc} alt={props.title} className="shadow-md rounded-xl" />
            </a>
        </div>
    )
}

export default ProjectBox