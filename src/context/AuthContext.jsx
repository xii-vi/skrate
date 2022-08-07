import { createContext, useContext } from "react";
import { GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"
import axios from "axios";
import { useEffect, useState } from "react"

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
    }

    const [userData,setUserData] = useState({});
    const [user,setUser] = useState({});

    const logOut =()=>{
        signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe();
        }
        }
    ,[])

    useEffect(()=>{
        const url = "https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818";
        axios(url).then(res=>setUserData(res.data)).catch(err=>console.log(err))
    },[])
    return(
        <AuthContext.Provider value={{googleSignIn,userData,user,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth =()=> useContext(AuthContext);

export {AuthProvider,useAuth};