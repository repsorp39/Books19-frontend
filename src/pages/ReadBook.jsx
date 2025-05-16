import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookInfo, getCurrentBookInStreaming } from '../store/features/pdf-stream/pdfStreamSlice';
import PDFReader from '../components/PDFReader';
import FileNotFound from '../components/FileNotFound';


function ReadBook() {
  const dispatch = useDispatch();

  const { bookid } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(fetchBookInfo(bookid));
  },[bookid]);
  
  const { 
    title,
    urlStream,
    isFetching,
    isError
  } = useSelector(getCurrentBookInStreaming);
  
  return (
  <main className="pdf-reader">
    <div className="back-to-home">
        <button onClick={()=>navigate("/collection")}>
          <IoMdArrowRoundBack /> Back to collection
        </button>
    </div>
    <section className="reader">
      <h1> {title} </h1>
      {
        !isFetching &&  <PDFReader fileUrl={urlStream} bookid={bookid} />
      }
      {
        isError && <FileNotFound />
      }
    </section>
  </main>
  );
}

export default ReadBook;