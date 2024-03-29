import React from 'react';

import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { auth } from '../firebase';

const style = {
    wrapper: `flex justify-center`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const Signin = () => {
    return (
        <div className={style.wrapper}>
            <GoogleButton onClick={googleSignIn} />
        </div>
    )
}

export default Signin