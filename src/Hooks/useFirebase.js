import initializeAuthentication from "../Pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

const useFirebase = () => {
     const [user, setUser] = useState({});
     const [error, setError] = useState('');
     const [isLoading, setIsLoading] = useState(false);

     const auth = getAuth();

     // create user
     const registerUser = (name, email, password, navigate) => {
          setIsLoading(true);
          createUserWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {

                    const newUser = { email, displayName: name };
                    setUser(newUser);
                    setError('');
                    // user name
                    updateProfile(auth.currentUser, {
                         displayName: name,
                    })
                         .then(() => {

                         })
                         .catch((error) => {

                         });
                    navigate('/');

               })
               .catch((error) => {
                    setError(error.message);
               })
               .finally(() => setIsLoading(false));

     }
     // login user
     const loginUser = (email, password, navigate, location) => {
          setIsLoading(true);
          signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    setUser(user);
                    setError('');
                    const destination = location.state.from || '/';
                    navigate(destination);


               })
               .catch((error) => {
                    setError(error.message)
               })
               .finally(() => setIsLoading(false));
     }

     // observation
     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, user => {
               if (user) {
                    setUser(user);

               }
               else {
                    setUser({});

               }
               setIsLoading(false);
          })
          return () => unsubscribed;
     }, [])

     // logOut
     const logOut = () => {
          setIsLoading(true);
          signOut(auth)
               .then(() => {

               })
               .catch((error) => {
                    setError(error.message)
               })
               .finally(() => setIsLoading(false));

     }


     return {
          user,
          error,
          isLoading,

          registerUser,
          loginUser,
          logOut
     }

}

export default useFirebase;