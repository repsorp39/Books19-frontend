import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectisAuthenticated } from '../../store/features/userAuth/authSlice';
import { useNavigate,Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { HiMiniEyeSlash } from "react-icons/hi2";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { isEmail, isPasswordStrong } from "../../utils/auth.utils";
import GoogleSign from "../google/GoogleSign";
import books19logo from "../../assets/images/books19.mini.png";


function AuthenticationForm({ action, authHandler, btnName, authError, errorHandler }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenthicated = useSelector(selectisAuthenticated);

  const [userinfo,setUserInfo] = useState({ email:"",password:"" });
  const [isPasswordHidden,setPasswordAsHidden] = useState(true);

  const tooglePasswordVisibility = () => setPasswordAsHidden(!isPasswordHidden);

  const handleChange = e =>{
      setUserInfo({...userinfo, [e.target.name]:e.target.value});
  };
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    errorHandler.setMessage("");
    if(action === "Register"){
      if(!isEmail(userinfo.email)){
        errorHandler.setMessage('Please provide a valid email');
        return;
      }
      if(!isPasswordStrong(userinfo.password)){
        errorHandler.setMessage('Password should be at least 08 characters, with upper,lower and digits');
        return;
      }
    }
    dispatch(authHandler(userinfo));
  };

  useEffect(()=>{
    if(isAuthenthicated) navigate("/", { replace:true });
  }, [isAuthenthicated]);

  return (
  <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <section className="auth-form">
        <form onSubmit={handleSubmit}>
          <div className="form-head">
            <Link to="/">
              <img src={books19logo} alt="Books19 Logo" />
            </Link>
            <h1> { action } </h1>
          </div>
          <p className="form-error"> {errorHandler.message || authError ||  ""} </p>
            <div>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                value={userinfo.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input 
                type={isPasswordHidden ? "password":"text"} 
                id="password"
                required
                name="password"
                value={userinfo.password}
                onChange={handleChange}
              />
              {
                isPasswordHidden 
                ? <IoEyeSharp onClick={tooglePasswordVisibility} />
                :<HiMiniEyeSlash onClick={tooglePasswordVisibility} />
              }
            </div>

            <button> { btnName } </button>
            {
              action === "Register" ? <p className="change-auth-form"> Already have an account ? <Link to="/login"> Sign in</Link> </p>
                                    :  <p className="change-auth-form"> Don't have an account ? <Link to="/register"> Sign up</Link> </p>
            }
        </form> 
          <div className="alternative-signin">
            <span>or</span>
            <GoogleSign />
          </div>
    </section>
  </GoogleOAuthProvider>
  );
}

export default AuthenticationForm;