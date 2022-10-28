
const SmallProjectBox = (props) => {
    return (
        <div className={`${props.bkColor} rounded-lg shadow-lg px-4 md:px-10 py-4 w-full`}>

            <div className="w-full h-full grid items-center">
                <div>
                    <h2>
                        <a rel="noreferrer" target="_blank" href={props.projectLink} className="text-3xl text-black">{props.title}</a>
                    </h2>

                    <a rel="noreferrer" target="_blank" href={props.projectLink}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={props.imgSrc} alt={props.title} className="mt-4 mb-1 rounded-lg" />
                    </a>

                    <p className="text-lime-700 mb-6">{props.technologies}</p>
                    <p>{props.description}</p>
                    <a className="text-sky-800 text-sm" href={props.github} target="_blank" rel="noreferrer">
                        GitHub Repository
                    </a>
                </div>

            </div>

        </div>
    )
}

export default SmallProjectBox