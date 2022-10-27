import Link from 'next/link'

const NavBar = () => {
    return (
        <div className = "bg-stone-800 p-6 flex items-center justify-between font-sans sticky top-0">

            <Link href = "/">
                <a className = "text-white font-bold text-2xl md:text-4xl"><h1>Andrew Tam</h1></a>
            </Link>

            <div className="text-sm md:text-lg">
                <div className = "ml-4 text-white">
                    {"Email: "}
                    <a href="mailto:contact@andrewtam.org" className = "text-sky-200 font-bold">
                        contact@andrewtam.org
                    </a>
                </div>

                <div className = "ml-4 text-white">
                    {"GitHub: "}
                    <a rel="noreferrer" target="_blank" href="https://github.com/tamandrew" className = "text-sky-200 font-bold">
                        tamandrew
                    </a>
                </div>

            </div>
        </div>
    )
}

export default NavBar