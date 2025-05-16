import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { BsFileEarmarkCheckFill } from "react-icons/bs";

function BookInformation({book,setCurrentBookToDisplay}) {

  const [seeMore,setSeeMore] = useState(false);
  const [isDownloaded,setIsDownloaded] = useState(false);

  const downloaded = () => {
      setTimeout(()=>{
        setIsDownloaded(true);
      },1000);
  }
  return (
    <section className="book-information">
      <article>
        <div className="preview">
          <div>
            <img src={book.previewImg} alt={book.title}/>
            <h3> { book.title } </h3>
            <span className="author"> 
              { book.author } 
            </span>
          </div>
        </div>
        <div>
          <div className="synopsis"> 
            <h5> Synopsis </h5>
           {
            seeMore
            ?  <p> 
                  { book.synopsis } <span onClick={()=>setSeeMore(false)}> less ... </span> 
              </p>
            :  <p> 
                  { book.synopsis.slice(0,270) } <span onClick={()=>setSeeMore(true)}>...more</span> 
              </p>
           }
          </div>
           <div className="group-btn">
              <Link to={`/read/${book.id}`}>
                <button className="btn-browse-book"> Start <FaPlay /> </button>
              </Link>
              {
                !isDownloaded
                ? <Link to={book.urlDownload}>
                  <button className="btn-download" onClick={downloaded}>
                      Download <MdFileDownload /> 
                  </button>
                </Link>
                : <button className="btn-downloaded"> 
                   Downloaded  <BsFileEarmarkCheckFill /> 
                </button>
              }
           </div>
          <table>
            <tr>
              <td> Pages</td>
              <td> { book.nbPages }</td>
            </tr>
            <tr>
              <td> Year of release</td>
              <td> {book.yearOfRelease }</td>
            </tr>
            <tr>
              <td> Categories </td>
              <td> { book.categories.join(",")} </td>
            </tr>
            <tr>
              <td> Languages </td>
              <td> { book.languages.join(",")} </td>
            </tr>
          </table>

        </div>
      </article>
      <IoIosClose 
      onClick={()=>setCurrentBookToDisplay(null)} 
      className="close-icon" 
      />
    </section>
  );
}

export default BookInformation;