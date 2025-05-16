import React, { useState } from 'react';
import AuthenticationForm from '../components/auth/AuthenticationForm';
import { registerUser, selectRegisterErrorMessage } from '../store/features/userAuth/authSlice';
import { useSelector } from 'react-redux';

const Register = () => {
  const [message,setMessage] = useState("");
  const authError = useSelector(selectRegisterErrorMessage);

  return (
    <>
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