import React, { useRef } from 'react';
import Header from './Header';
import { useState } from 'react';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data(validate the input data of the user)
    

    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    // if(message === null){ // if the credentials are valid
    //   // create a new user(Sign / Sign up)


    // }


    if(message) return; // do not go ahead if there is an error message regarding credentials

    // Sign in / Sign up Logic

    if(!isSignInForm){
      // Sign up Logic

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name.current.value, photoURL: USER_AVATAR,
    }).then(() => {
      // Profile updated!

      // dispatch an action
      const {uid, email, displayName, photoURL} = auth.currentUser; // to get value from current user, not from the previous user
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));

    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
    });
    
    //console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });
    }

    else{
      // Sign in Logic

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }





  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);

  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (<input type='text' ref={name}  placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}

        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />

        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}> {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer'  onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Here" : "Already registered? Sign in Now"}</p>
      </form>
    </div> 
  )
}

export default Login

// rafce -> react arrow functional component export
