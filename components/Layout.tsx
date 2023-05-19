import Head from "next/head"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Andrew Tam</title>
            </Head>

            <main className="sm:w-3/4 w-[95%] mx-auto">
                {children}
            </main>

            <div className = "w-full mt-24 bg-white text-black text-center py-2">
                © 2023. All rights reserved.
            </div>
        </>
    )
}

export default Layout