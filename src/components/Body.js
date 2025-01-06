import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    


    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },

        {
            path: "/browse",
            element: <Browse/>,
        },
    ]);

    // to call this only once, not again and again (at one time user will either sign in, sign out or login. User will not do 3 things at a time, only one thing at a time.)
    useEffect(() => {

      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user

          // destructuring the object, hence curry brackets
          const { uid, email, displayName, photoURL } = user; // take this many things from the user object

          //dispatch an action
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          
        } else {
          // User is signed out
          dispatch(removeUser());
          
          
        }
      });

    }, []);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body
