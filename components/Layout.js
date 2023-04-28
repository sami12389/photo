import React from "react"
import Head from "next/head"
import HeroBanner from "./HeroBanner"
import Footer from "./Footer"


const Layout = ({children})=>{
    return(
        <div className = "layout">
            <Head>
                <title>Ku Photography</title>
            </Head>
            <header>
                <HeroBanner/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Layout