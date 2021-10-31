import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const InitilaizeAuthentication = ()=>{
    initializeApp(firebaseConfig);
}
export default InitilaizeAuthentication;