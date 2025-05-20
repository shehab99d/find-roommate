import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])



    const authData = {
        user,
        login,
        setUser,
        createUser,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;