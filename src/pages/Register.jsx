import React, { useState } from 'react';
import AuthenticationForm from '../components/auth/AuthenticationForm';
import { registerUser, selectRegisterErrorMessage } from '../store/features/userAuth/authSlice';
import { useSelector } from 'react-redux';
import Head from '../components/global/Head';

const Register = () => {
  const [message,setMessage] = useState("");
  const authError = useSelector(selectRegisterErrorMessage);

  return (
    <>
    < Head title="Books19 - Register" />
      <AuthenticationForm 
        action="Register"
        authHandler={registerUser}
        authError={authError}
        errorHandler={{message,setMessage}}
        btnName="Sign up"
      />
    </>
  );
};

export default Register;