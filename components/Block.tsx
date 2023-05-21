type BlockProps = {
    children: React.ReactNode,
    heading: string
    caption?: string,
    opacity?: string
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
                className = "shadow-md mt-4 rounded px-4 py-2 md:px-10 md:py-5"
                style = {{backgroundColor: `rgba(255, 255, 255, ${props.opacity ?? "1"})`}}
            >
                {props.children}
            </div>
        </>
        
    )
}

export default Block;