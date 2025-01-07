import React from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(store => store.user); // subscribing to the store, in order to bring the logo of the user into the browse page

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

// to call this only once, not again and again. In order to authenticate the user only once when the website reloads. (if user is login redirect the user to browse page else if the user is not login do not redirect him to browse page.) Whenever the header component is loaded, onauthchange is called at once only.

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        // destructuring the object, hence curry brackets
        const { uid, email, displayName, photoURL } = user; // take this many things from the user object

        //dispatch an action
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
        
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when the component unmounts
    return () => unsubscribe();

  }, []);


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-40"  src={LOGO} alt='logo'/>

      {user && (<div className='flex p-2'>
        <img className='w-12 h-12'  alt='usericon' src={user?.photoURL}/>

        <button onClick={handleSignOut} className='font-bold text-white p-4'>(Sign Out)</button>
      </div>)}
    </div>

    
    
  )
}

export default Header
