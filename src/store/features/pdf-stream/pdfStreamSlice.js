import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../config/config";

const initialState = {
  bookid:"",
  urlStream:"",
  title:"",
  chunks:[],
  isFetching:true,
  isError:false
}

const fetchBookInfo = createAsyncThunk("fetch/bookinfo",async (bookid) =>{
  const { data } = await axios.get(`/books/one/${bookid}`);
  return {
    bookid,
    urlStream:data.urlDownload,
    title:data.title 
  };
});


const streamSlice = createSlice({
  name:"pdfStream",
  initialState,
  extraReducers:(builder) =>{
    builder.addCase(fetchBookInfo.fulfilled,(state,action) =>{
      state.isFetching = false;
      Object.assign(state,{ ...action.payload });
    })

    builder.addCase(fetchBookInfo.rejected,(state,action) =>{
      state.isError = true;
      console.log(action.error);
      
    })
  }
});

const getCurrentBookInStreaming = (state)=> state.pdfStream;

export { getCurrentBookInStreaming,fetchBookInfo };
export default streamSlice.reducer;