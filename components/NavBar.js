import Link from 'next/link'

const NavBar = () => {
    return (
        <div className = "bg-stone-800 p-6 flex items-center justify-between font-sans">

            <Link href = "/">
                <a className = "text-white font-bold text-4xl">Andrew Tam</a>
            </Link>

            <div className="">
                <div className = "ml-4 text-white">
                    {"Email: "}
                    <a href="mailto:contact@andrewtam.org" className = "text-sky-200 font-bold text-lg">
                        contact@andrewtam.org
                    </a>
                </div>

                <div className = "ml-4 text-white">
                    {"GitHub: "}
                    <a target="_blank" href="https://github.com/tamandrew" className = "text-sky-200 font-bold text-lg">
                        tamandrew
                    </a>
                </div>

            </div>
        </div>
    )
}

export default NavBar