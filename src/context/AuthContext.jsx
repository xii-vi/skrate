import { createContext, useContext } from "react";
import { GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
    }
    
    return(
        <AuthContext.Provider value={{googleSignIn}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth =()=> useContext(AuthContext);

export {AuthProvider,useAuth};