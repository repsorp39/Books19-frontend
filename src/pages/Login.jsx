import React, { useState } from 'react';
import AuthenticationForm from '../components/auth/AuthenticationForm';
import { selectLoginErrorMessage, signUserUsingCredentials } from '../store/features/userAuth/authSlice';
import { useSelector } from 'react-redux';
import Head from '../components/global/Head';

const Login = () => {
  const [message,setMessage] = useState("");
  const authError = useSelector(selectLoginErrorMessage);

  return (
    <>
      <Head title="Books19 - Login page" />
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