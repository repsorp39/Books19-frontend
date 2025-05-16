import axios from "../../../config/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn:false,
  loginErrorMessage:"",
  registerErrorMessage:"",
  token:"",
  pseudo:"",
  email:""
};

const fetchUser = createAsyncThunk("auth/user",async () =>{
  const{ data } = await axios.get("/auth/user");
  return {
    email:data.email,
    userid:data.id,
    pseudo:data.pseudo
  }
});

const signUserUsingCredentials = createAsyncThunk("auth/login",async (credentials) =>{
   try {
      const { data } =  await axios.post("/auth/login",credentials);
      return data.token;
   } catch (error) {
      throw error.response.data;
   }
});

const signUserWithGoogle = createAsyncThunk("fetch/google", async (credential) =>{
  const { data } = await axios.post("/auth/google-login", { token: credential });
  return data.token;
});

const registerUser = createAsyncThunk("/register/user",async (userinfo,thunkAPI) =>{
  try {
    //get a fullname based on the email
    userinfo.fullname = userinfo.email.split("@")[0];
    //generate a random pseudo
    userinfo.pseudo = userinfo.fullname.split(' ')[0] + String(Number(new Date())).slice(0,3);
    //create a new user
    await axios.post("/auth/user",userinfo);
    //login created user
    thunkAPI.dispatch(signUserUsingCredentials(userinfo));
  } catch (error) {
    throw error.response.data;
  }
});

const authReducer = createSlice( {
    name:"userAuth",
    initialState,
    reducers:{
      signOut(state){
        Object.assign(state,initialState);
      }
    },
    extraReducers:(builder)=>{
      //get user info
      builder.addCase(fetchUser.fulfilled,(state,action) =>{
        Object.assign(state, { ...action.payload});
      });
      builder.addCase(fetchUser.rejected,(state,action) =>{
        state.isLoggedIn = false;
      });

      //register user
      builder.addCase(registerUser.rejected,(state,action) =>{
        state.registerErrorMessage = action.error.message;
      });

      //login user
      builder.addCase(signUserUsingCredentials.rejected,(state,action) =>{
        state.loginErrorMessage = action.error.message;
      });
      builder.addCase(signUserUsingCredentials.fulfilled,(state,action) =>{
        state.isLoggedIn = true;
        state.token = action.payload;
      });
      
      //login with google
      builder.addCase(signUserWithGoogle.fulfilled,(state,action) =>{
        state.isLoggedIn = true;
        state.token = action.payload;
      })
    }
  }
);

const selectUserPseudo = state => state.auth.pseudo;
const selectLoginErrorMessage = state => state.auth.loginErrorMessage;
const selectRegisterErrorMessage = state => state.auth.registerErrorMessage;
const selectisAuthenticated = state => state.auth.isLoggedIn;

//selector
export {
  selectisAuthenticated,
  selectLoginErrorMessage,
  selectRegisterErrorMessage,
  selectUserPseudo
};

//thunk actions
export {
  fetchUser,
  registerUser,
  signUserUsingCredentials,
  signUserWithGoogle
};

export const  { signOut } = authReducer.actions;
export default authReducer.reducer;