import { useEffect, useState } from 'react';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { 
  fetchBooks, 
  fetchCategories, 
  fetchLanguages, 
  selectBooks,
  selectCategories, 
  selectLang, 
  selectTotalPage,
 } from '../store/features/books/booksSlice';
import CollectionWrapper from '../components/collection/CollectionWrapper';
import Head from '../components/global/Head';


function Collection() {
  const dispatch = useDispatch();
  
  //help to get the category for users which come on this page using category sections from home page
  const [ urlParams,setUrlParams ] = useSearchParams();
  const categoryInPath = urlParams.get("category");

  const categories = useSelector(selectCategories);
  const languages = useSelector(selectLang);
  const books = useSelector(selectBooks);
  const totalPages = useSelector(selectTotalPage);

  const paginator = new Array(totalPages).fill(0); //to be able to see number 1,2,3 corresponding with pages

  const [category,setCategory] = useState(categoryInPath ?? "");
  const [lang,setLang] = useState("");
  const [currentPage,setCurrentPage] = useState(1);

  const handleLangChange = (e) => {
    setLang(e.target.value);
    setCurrentPage(1); //each time lang change we should reset everything to 1
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  };

  useEffect(()=>{
    dispatch(fetchCategories());
    dispatch(fetchLanguages());
  },[]);

  useEffect(()=>{
    dispatch(fetchBooks({page:currentPage, category, lang}));
  },[currentPage]);

  useEffect(()=>{
    dispatch(fetchBooks({ category, lang }));
    //after using the category in the url we must clean it now to allow user to change to another desired category 
    if(categoryInPath) setUrlParams({});
  },[lang,category]);

  return (
    <>
      <Head  title="Books19 - Collection" />
      <Header />
      <main className="collection-main">
          <section>
            <div className="filter-collection">
              <select 
                name="categories"
                onChange={ handleCategoryChange }
              >
                  <option value="" >Choose a category</option>
                  { categories?.map((category) => (<option key={category.wording} value={category.wording}> { category.wording } </option>)) }
              </select>
              <select 
                name="languages" 
                onChange={ handleLangChange }
              >
                  <option value="" >Select language</option>
                  { languages.map((lang) => (<option key={lang.wording} value={lang.wording}> { lang.wording } </option>)) }
              </select>
            </div>
            <div className='current-filter'> 
              {
                (category || lang) && "Filter:"
              }
              {
                category && <span> {category} </span>
              }
             {
                lang && <span>{lang} </span>
             }
            </div>
          </section>
          <section>
            <h1>Collections</h1>
            <CollectionWrapper books={books}  />
            
            {
              totalPages > 1 && <div className="paginator">
                {
                  paginator.map((pageNumber,index) => (
                    /*the array start at 0 but page will start at 1 */
                    <span 
                      key={index}
                      onClick={()=>setCurrentPage(index+1)}
                      className={currentPage === (index + 1 )? "current-page":""} //dynamically change the color of the button if we are on the current page or no
                    > 
                      { index + 1}
                    </span>
                  )) 
                }
            </div>
            }
          </section>
      </main>
      <Footer />
    </>
  );
}

export default Collection;