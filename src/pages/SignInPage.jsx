import logo from "../assest/logo.png"
import navbarImg from "../assest/navbar.png"
import footerImg from "../assest/footer.png"
import { useAuth } from "../context/AuthContext"
export const SignInPage = ()=>{
    const {googleSignIn} = useAuth();

    const googleSignHandler = async()=>{
        try{
            await googleSignIn();
        }
        catch(error){
            console.log(error)
        }
    }
    return(<>
    <div>
    <nav className="flex h-80">
        <img className="w-20 h-20 lg:w-24 lg:h-24" src={logo} alt="logo" />
        <div className="mx-auto">
            <img className ="lg:w-screen lg:h-80" src={navbarImg} alt="nav-img" />
        </div>
    </nav>
    <div className="md:w-52 md:ml-10 mx-4">
        <p className="text-xl mb-6">Welcome Back to Skrate!!</p>
        <button className="w-full bg-[#4F65F6] px-4 py-1 text-white rounded-sm" onClick={googleSignHandler}>Sign In With Google</button>
    </div>

    <div className="justify-end hidden lg:flex">
        <img className="h-80" src={footerImg} alt="footer" />
    </div>
    </div></>)
}