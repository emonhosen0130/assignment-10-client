import auth from "../config/firebase,config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { GoogleAuthProvider, signOut } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    const signUpWithEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInWithEmail= (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }

    const updateUserProfile = (obj) => {
        setLoading(true)
        return updateProfile(auth.currentUser, obj)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(user)
            setLoading(false)
            setUser(currentUser);
        });
        return (() => {
            unsubscribe();
        }, [])

    })

    const authInfo = {
        googleSignIn, signInWithEmail, signUpWithEmailPassword, logOut, updateUserProfile, loading, setLoading, user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider >
    );
};

export default AuthContextProvider;