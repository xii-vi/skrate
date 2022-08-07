import footerImg from "../assest/footer.png"
import { useAuth } from "../context/AuthContext"
import { NavbarSignIn } from "../components/NavbarSignIn"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const SignInPage = ()=>{
    const navigate=useNavigate();
    const {googleSignIn,user} = useAuth();

    const googleSignHandler = async()=>{
        try{
            await googleSignIn();
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(user!== null)
        navigate("/dashboard")
    })
    return(<>
    <div>
    <NavbarSignIn />
    <div className="md:w-52 md:ml-10 mx-4">
        <p className="text-xl mb-6">Welcome Back to Skrate!!</p>
        <button className="w-full bg-[#4F65F6] px-4 py-1 text-white rounded-sm" onClick={googleSignHandler}>Sign In With Google</button>
    </div>

    <div className="justify-end hidden lg:flex">
        <img className="h-80" src={footerImg} alt="footer" />
    </div>
    </div></>)
}