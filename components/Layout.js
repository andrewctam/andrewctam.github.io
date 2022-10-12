import Head from "next/head"
import NavBar from "./NavBar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Andrew Tam</title>
            </Head>

            <NavBar />

            <main>{children}</main>

        </>
    )
}

export default Layout