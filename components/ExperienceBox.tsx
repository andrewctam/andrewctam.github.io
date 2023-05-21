
type ExperienceBoxProps = {
    children: React.ReactNode,
    role: string,
    company: string,
    logoSrc: string
    startDate: string,
    endDate: string
}

const ExperienceBox = (props: ExperienceBoxProps) => {
    return (
        <div className="bg-gray-100 border border-black/10 rounded-lg shadow-lg p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

            <div>
                <div>
                    <h2 className="text-2xl text-black">
                        {props.role}
                    </h2>

                    <p className="text-sky-800 text-sm">
                        {`${props.startDate} - ${props.endDate}`}
                    </p>

                    <img src={props.logoSrc} alt={`${props.company} logo`} className="mt-8 w-1/4" />

                    <h2 className="text-lg text-black">
                        {props.company}
                    </h2>
                </div>

            </div>

            <div>
                {props.children}
            </div>
        </div>
    )
}

export default ExperienceBox