import Head from "next/head"

type LayoutProps = {
    children: React.ReactNode
}
const Layout = (props: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Andrew Tam</title>
            </Head>

            <main className="w-[95%] sm:w-4/5 md:w-3/4 mx-auto min-h-screen">
                {props.children}
            </main>

            <div className = "w-full mt-24 text-xs bg-white text-black text-center py-1">
                © 2023 Andrew Tam. All rights reserved.
            </div>
        </>
    )
}

export default Layout