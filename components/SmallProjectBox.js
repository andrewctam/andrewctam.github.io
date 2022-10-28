import Link from "next/link"

const SmallProjectBox = (props) => {
    return (
        <div className= {`${props.bkColor} rounded-lg shadow-lg px-10 py-4 grid grid-cols-1 gap-6 w-full`}>

            <div className = "w-full h-full grid items-center">
                <div>
                    <h2>
                        <a rel="noreferrer" target = "_blank" href = {props.projectLink} className = "text-3xl text-black">{props.title}</a>
                    </h2>
                    <p className = "text-rose-700 mt-1 mb-3">{props.technologies}</p>
                    <p>{props.description}</p>
                    <a className="text-sky-700" href={props.github} target="_blank" rel="noreferrer">
                    GitHub Repository
                    </a>
                </div>

                <a rel="noreferrer" target = "_blank" href = {props.projectLink}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src = {props.imgSrc} alt = {props.title} className = "my-4 rounded-lg"/>
                </a>
            </div>
    
        </div>
    )
}

export default SmallProjectBox