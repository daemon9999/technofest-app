import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {Toaster} from "react-hot-toast"
export default function HomeLayout() {

    const location = useLocation()


    useEffect(() => {
        window.scrollTo(0,0)
    }, [location.pathname])
    return (

        <>
        <Toaster position="top-right" />
            <div className="h-full">
                <Header/>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>
    )
}