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
        </>
    )
}

export default Layout