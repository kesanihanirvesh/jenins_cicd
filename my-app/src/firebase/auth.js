import {auth} from './firebase';    
import { useEffect } from 'react';  
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider } from 'firebase/auth';

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return result = await signInWithPopup(auth, provider);
};

export const doSignOut =  () => {
    return auth.signOut();
};

export const doPasswordReset = async (email) => {   
    return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = async (password) => {
    return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification =()=>{
    return sendEmailVerification(auth.currentUser,{
        url: '${window.location.origin}/login'
    });
}