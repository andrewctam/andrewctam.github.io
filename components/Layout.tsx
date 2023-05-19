import Head from "next/head"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Andrew Tam</title>
            </Head>

            <main className="w-[95%] sm:w-4/5 md:w-3/4 mx-auto">
                {children}
            </main>

            <div className = "w-full mt-24 text-xs bg-white text-black text-center py-1">
                © 2023 Andrew Tam. All rights reserved.
            </div>
        </>
    )
}

export default Layout