import {auth} from '../../firebase';
import { useEffect } from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import { doSignInWithEmailAndPassword,doSignInWithGoogle } from '../../../my-app/src/firebase/auth';
import {useAuth} from '../../../my-app/src/contexts/authContext';
const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,initializeUser);

    return unsubscribe;
  }, []);

  async function initializeUser(user) {
   if(user){
     setCurrentUser({...user});
     setUserLoggedIn(true);
  }
  else{
    setCurrentUser(null);
    setUserLoggedIn(false);
  }
  setLoading(false);
  const value={
    currentUser,
    userLoggedIn,
    loading
  }
  return (<AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>);
}
}