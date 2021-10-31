import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import InitilaizeAuthentication from "../pages/login/firebase/firebase.init";

InitilaizeAuthentication();


const useFirebase = () => {
    const [user , setUser] = useState({});

    const auth = getAuth();

    const singInUsingGoole = () =>{
        const Googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth,Googleprovider)
        .then(result =>{
            setUser(result.user)
        });
    };
  useEffect(()=>{
     const unsunscribed= onAuthStateChanged(auth, user=>{
          if(user)
          {
              setUser(user);
          }
          else{
              setUser({});
          }
      });
      return ()=> unsunscribed;
  },[]);

     const logOut = () =>{
         signOut(auth)
         .then(()=>{});
     };
    return{
        user,
        singInUsingGoole,
        logOut
    }
}
export default useFirebase;