import React from 'react';

function SingleBook({ book, setCurrentBookToDisplay,currentBookToDisplay }) {
  return (
    <li 
      key={ book.id } 
      className="single-book"
      onClick={()=>setCurrentBookToDisplay(currentBookToDisplay ?? book)}
    >
    <div>
      <img src={ book.previewImg } alt={ book.title } />
    </div>
    <h5> { book.title } </h5>
  </li>
  );
}

export default React.memo(SingleBook);  
