import Link from "next/link"

type SmallProjectBoxProps = {
    title: string,
    technologies: string,
    description: string,
    projectLink?: string,
    githubLink?: string
}

const SmallProjectBox = (props: SmallProjectBoxProps) => {
    return (
        <div className="bg-gray-100 border border-black/10 rounded-lg shadow-lg p-4 md:p-10 w-full">
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

            {props.projectLink ?
                <a rel="noreferrer" target="_blank" href={props.projectLink} className={"text-slate-700 shadow-md hover:bg-green-200 bg-green-200/50 mr-2 p-1 w-fit h-fit border border-black/50 rounded text-xs"}>
                    Website
                </a>
            : null}

            {props.githubLink ?
                <a rel="noreferrer" target="_blank" href={props.githubLink} className={"text-slate-700 shadow-md hover:bg-sky-200 bg-sky-200/50 mt-4 p-1 w-fit h-fit border border-black/50 rounded text-xs"}>
                    GitHub Repo
                </a>
            : null}
        </div>
    )
}

export default SmallProjectBox