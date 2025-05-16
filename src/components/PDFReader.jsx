import React from 'react';
import { 
  Worker,
  Viewer,
  ScrollMode,
  SpecialZoomLevel 
} from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';


const PDFReader = ({fileUrl,bookid}) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const initialPage = localStorage.getItem(`current-page-${bookid}`) ? parseInt(localStorage.getItem(`current-page-${bookid}`)):0;
  const handlePageChange = (e) => {
    localStorage.setItem(`current-page-${bookid}`, `${e.currentPage}`);
};

  return (
   <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
      <div style={{ height:"150vh"}}>
        <Viewer 
          fileUrl={fileUrl} 
          scrollMode={ScrollMode.Vertical}
          defaultScale={SpecialZoomLevel.PageWidth}
          enableSmoothScroll
          onPageChange={handlePageChange}
          initialPage={initialPage}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
   </Worker>
  );
};

export default PDFReader;