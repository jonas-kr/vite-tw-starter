import { Outlet } from "react-router-dom"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Layout() {
    return (
        < >
            <Header />
            <main className="p-4 py-10 bg-slate-300">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout