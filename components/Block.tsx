type BlockProps = {
    children: React.ReactNode,
    heading: string
    caption?: string,
    opacity?: string
    padding?: boolean
}
const Block = (props: BlockProps) => {
    return (
        <>
            <h1 className = "text-3xl font-semibold mt-12 ml-4 md:ml-10">
                {props.heading}
            </h1>

            {props.caption ? 
                <h2 className="text-lg ml-4 md:ml-10 text-black">
                {props.caption}
                </h2>
            : null}

            <div 
                className = {`mt-4 rounded ${props.padding ? "px-4 py-2 md:px-10 md:py-5" : ""} ${props.opacity !== "0" ? "shadow-md" : ""}`}
                style = {{
                    backgroundColor: `rgba(255, 255, 255, ${props.opacity ?? "1"})`,
                }}
            >
                {props.children}
            </div>
        </>
        
    )
}

export default Block;