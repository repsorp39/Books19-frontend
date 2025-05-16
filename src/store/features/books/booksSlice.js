import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../config/config";

const initialState = {
  books:[],
  totalPage:0,
  categories:[],
  languages:[],
  isFetchingCategories:true,
  isFetchingBooks:true,
};

const fetchCategories = createAsyncThunk("fetch/categories", async () =>{
 const { data }  = await axios.get("/books/categories");
 return data.categories;
});

const fetchLanguages = createAsyncThunk("fetch/lang", async () =>{
 const { data }  = await axios.get("/books/languages");
 return data.languages;
});

const fetchBooks = createAsyncThunk("fetch/books", async ({ page=1,category="",lang="" }) =>{
  const { data }  = await axios.get(`/books?page=${page}&category=${category}&lang=${lang}`);
  return { 
    totalPage:data.totalPage,
    books:data.books
  };
 });


const bookSlice = createSlice({
  name:"books",
  initialState,
  reducers:{
    setBooks :(state,action)=>{
        state.books = action.payload;
    }
  },
  extraReducers:(builder)=>{
    builder
      //for categories
      .addCase(fetchCategories.fulfilled,(state,action) =>{
        state.isFetchingCategories = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected,(state,action) =>{
        console.log(action.error);
      })

      //for languages
      .addCase(fetchLanguages.fulfilled,(state,action) =>{
        state.languages = action.payload;
      })

      //for books
      .addCase(fetchBooks.fulfilled,(state,action) =>{
        state.isFetchingBooks = false;
        state.books = action.payload.books;
        state.totalPage = action.payload.totalPage;
      })
      .addCase(fetchBooks.rejected,(state,action) =>{
          console.log(action.error);
      })
  }
});

const selectBooks = (state) => state.books.books;
const selectTotalPage = (state) => state.books.totalPage;
const getBooksFetchingState = (state) => state.books.isFetchingBooks;

const selectCategories = (state) => state.books.categories;
const getCategoriesFetchingState = (state) => state.books.isFetchingCategories;

const selectLang = (state) => state.books.languages;


export {
  selectBooks,
  getBooksFetchingState,
  fetchBooks,
  selectTotalPage,

  selectCategories,
  getCategoriesFetchingState,
  fetchCategories,

  fetchLanguages,
  selectLang
}

export const { setBooks } = bookSlice.actions.setBooks;
export default bookSlice.reducer;