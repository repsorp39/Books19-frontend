import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleBook from '../SingleBook';
import { 
  fetchBooks, 
  getBooksFetchingState, 
  selectBooks 
} from '../../store/features/books/booksSlice';
import FallBackCard from '../global/FallBackCard';
import { HiArrowRightCircle } from "react-icons/hi2";
import BookInformation from '../BookInformation';


function BookContainer() {
  const dispatch = useDispatch();

  const isFetching = useSelector(getBooksFetchingState);
  const books = useSelector(selectBooks);

  const [currentBookToDisplay,setCurrentBookToDisplay] = useState(null);
  
  useEffect(()=>{
    dispatch(fetchBooks({}));
  },[]);

  const listBooks = books.map((book) => {
    return  ( 
    <SingleBook
       key={book.id}
       book={book} 
       currentBookToDisplay={currentBookToDisplay}
       setCurrentBookToDisplay={setCurrentBookToDisplay}
     />)
  });

  return (
     isFetching ?  <FallBackCard /> :
    <article>
      <ul className="book-preview">{ listBooks }</ul>
      {
        currentBookToDisplay && 
          <BookInformation  
            setCurrentBookToDisplay={setCurrentBookToDisplay}
            book={currentBookToDisplay}
          />
      }
      <Link to="/collection">
        <button className='btn-browse-book'> 
          Browse our collections <HiArrowRightCircle />
        </button>
      </Link>
    </article>
  );
}

export default BookContainer;