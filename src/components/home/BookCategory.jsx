import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  fetchCategories, 
  getCategoriesFetchingState, 
  selectCategories 
} from '../../store/features/books/booksSlice';
import FallBackCard from '../global/FallBackCard';


function BookCategory() {
  const dispatch = useDispatch();

  const isFetching = useSelector(getCategoriesFetchingState);
  const categories = useSelector(selectCategories);

  useEffect(()=>{
    dispatch(fetchCategories());
  },[]);

  const categoriesPreview = categories.slice(0,5).map((category) =>
    {
      return  <li key={category._id}>
                <Link to={`/collection?category=${category.wording}`}>
                    <img src={category.descriptionImg} alt={category.wording} />
                    <h5> {category.wording} </h5>
                    <strong> {category.wording} </strong>
                </Link>
              </li>
  });

  return (
    <section className="categories">
      <h2>Explore Our Categories </h2>
      <article className="categories-holder">
      {
        isFetching ? <FallBackCard /> : <ul> { categoriesPreview } </ul>
      }
       </article>
    </section>
  );
}

export default BookCategory;