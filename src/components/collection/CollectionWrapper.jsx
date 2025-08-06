import React, { useState } from 'react';
import SingleBook from '../SingleBook';
import BookInformation from '../BookInformation';

function CollectionWrapper({books}) {
  const [currentBookToDisplay,setCurrentBookToDisplay] = useState(null);

  return (
   <>
    <section className="collection-wrapper">
      <ul  className="book-preview">
      {
        books.map((book) => ( 
        <SingleBook 
          key={book.id}  
          book={book}
          setCurrentBookToDisplay={setCurrentBookToDisplay}
          currentBookToDisplay={currentBookToDisplay}
        />)
      )
      }
      </ul>
    </section>
    {/* Specifics info about books */}
     {
      currentBookToDisplay && 
        <BookInformation  
          setCurrentBookToDisplay={setCurrentBookToDisplay}
          book={currentBookToDisplay}
        />
    }
   </>
  );
}

export default CollectionWrapper;