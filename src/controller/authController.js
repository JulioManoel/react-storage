import { Alert } from "react-native";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const AuthController = () => {

    const google = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                Alert.alert('foi')
            })
    }

    return { google }
}

export default AuthController
