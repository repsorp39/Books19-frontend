import React, { useState } from 'react';
import AuthenticationForm from '../components/auth/AuthenticationForm';
import { selectLoginErrorMessage, signUserUsingCredentials } from '../store/features/userAuth/authSlice';
import { useSelector } from 'react-redux';

const Login = () => {
  const [message,setMessage] = useState("");
  const authError = useSelector(selectLoginErrorMessage);

  return (
    <>
      <AuthenticationForm
          action="Login"
          authHandler={signUserUsingCredentials}
          btnName="Sign in"
          authError={authError}
          errorHandler={{message,setMessage}}
      />
    </>
  );
};

export default Login;