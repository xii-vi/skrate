import logo from "../assest/logo.png"
import { useAuth } from "../context/AuthContext"
export const NavbarHomepage = ()=>{
    const {logOut,userData} = useAuth();
    console.log(userData.full_name)
    const logOutHandler =async()=>{
        try{
            await logOut();
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <nav className="flex justify-between">
            <img className="w-20 h-20 lg:w-24 lg:h-24" src={logo} alt="logo" />
        <div className="flex justify-center items-center px-6">
            <div className="mr-16">
            <button className="w-full bg-[#4F65F6] px-4 py-1 text-white rounded-sm" onClick={logOutHandler}>
                Sign Out
            </button>
            </div>
            <div className="flex justify-center items-center">
                <img className="w-12 h-12 rounded-full" src="https://re-ui.netlify.app/assets/avatar/avatar-1.png" alt="userAvatar" />
                <p className="text-lg ml-5">{userData.full_name}</p>
            </div>
        </div>
    </nav>
    )
}