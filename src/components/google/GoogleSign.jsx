import React from 'react';
import { useGoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signUserWithGoogle } from '../../store/features/userAuth/authSlice';
import googleImg from "../../assets/images/google.png";


function GoogleSign(props) {
  const dispatch = useDispatch();

  const afterLoginAction = {
    onSuccess: (credentialResponse) => {
      dispatch(signUserWithGoogle(credentialResponse.credential));
    }
  }

  useGoogleOneTapLogin(afterLoginAction);

  const login = useGoogleLogin(afterLoginAction);

  return (
  <>
    <button onClick={login} title='Continue with google'>
      <img src={googleImg} alt="google png" />
    </button>
  </>
  );
}

export default GoogleSign;