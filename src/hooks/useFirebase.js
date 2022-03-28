import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Pages/Log in/Firebase/firebase.init";


firebaseAuthentication()
const useFirebase=()=>{
    const[user,setUser]=useState({})
    const [isLoading,setIsloading]=useState(true)

    const auth=getAuth()

    const signInUsingGoogle=()=>{
        setIsloading(true)
        const googleProvider=new GoogleAuthProvider()
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .finally(()=>setIsloading(false))
    }

    // observe user state change
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsloading(false)
        })
        return ()=>unsubscribe;
    },[])

    const logOut=()=>{
        setIsloading(true)
        signOut(auth)
        .then(()=>{})
        .finally(()=>setIsloading(false))
    }


    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;