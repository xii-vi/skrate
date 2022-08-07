import { Dashboard } from "../components/Dashboard";
import { NavbarHomepage } from "../components/NavbarHomepage";
import { Sidebar } from "../components/Sidebar";

export const Homepage = ()=>{

    return(<>
    <NavbarHomepage />
    <div className="grid grid-cols-1 lg:grid-cols-[20%_75%]">
        <Sidebar />
        <Dashboard />
    </div>
    </>)
}