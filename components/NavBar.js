import Link from 'next/link'

const NavBar = () => {
    return (
        <div className = "w-full bg-slate-200 h-fit p-4">

            <div className = "flex items-center justify-center h-full mb-2">
                <p className = "text-sky-800 font-bold text-4xl">Andrew Tam</p>
            </div>  

            <div className = "flex items-center justify-center h-full">
                
                <div className = "mx-4">
                    <Link href = "/about">
                        <a className = "text-slate-800 font-bold text-xl">About Me</a>
                    </Link>
                </div>  
                <div className = "mx-4">
                    <Link href = "/projects">
                        <a className = "text-slate-800 font-bold text-xl">Projects</a>
                    </Link>
                </div>  
            </div>
        </div>
    )
}

export default NavBar