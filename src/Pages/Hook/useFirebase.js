import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
  import initializeFirebase from "../Firebase/Firebase.init";
  
  initializeFirebase();
  
  const useFirebase = () => {
    const [name, setName] = useState("");
    const [users, setUsers] = useState({});
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [isLoad, setIsLoad] = useState(true);
  
    const singInWithGoogle = () => {
      setIsLoad(true);
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider).finally(() =>
        setIsLoad(false)
      );
    };
  
    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUsers(user);
        } else {
          setUsers({});
        }
        setIsLoad(false);
      });
      return () => unsubscribed;
    }, []);
  
    const logOut = () => {
      setIsLoad(true);
      signOut(auth)
        .then(() => {})
        .finally(() => setIsLoad(false));
    };
  
    const handleRegistration = (e) => {
      e.preventDefault();
      console.log(email, password);
      if (password.length < 6) {
        setError("password must be 6 characters");
        return;
      }
  
      isLogin ? processLogin(email, password) : createNewUser(email, password);
    };
  
    const toggleLogin = (e) => {
      setIsLogin(e.target.checked);
    };
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      // e.preventDefault();
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      // e.preventDefault();
    };
  
    const processLogin = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  
    const createNewUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError("");
          setUserName("");
        })
        .catch((error) => {
          setError(error.message);
        });
    };
    const setUserName = () => {
      updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
    };
  
    return {
      users,
      singInWithGoogle,
      logOut,
      handleRegistration,
      handleEmailChange,
      handlePasswordChange,
      createUserWithEmailAndPassword,
      error,
      toggleLogin,
      isLogin,
      handleNameChange,
      isLoad,
    };
  };
  
  export default useFirebase;