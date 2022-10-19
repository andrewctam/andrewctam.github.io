
const ProjectBox = (props) => {
    return (
        <div className="bg-slate-400 rounded p-10 my-10 grid grid-cols-2">

            <div className = "bg-red-200 w-full h-full">{props.title}</div>
            <div className = "bg-blue-200 w-full h-full">{props.description}</div>
            

            
        </div>
    )
}

export default ProjectBox