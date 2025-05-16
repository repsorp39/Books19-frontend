import React from 'react';
import { MdOutlineError } from "react-icons/md";

function FileNotFound() {
  return (
   <section style={
    {
      width:"350px",
      height:"250px",
      backgroundColor:"red",
      color:"white",
      fontSize:"1.2em",
      margin:"auto",
      placeContent:"center",
      textAlign:"center",
      alignItems:"center"
    }
   }>
       <MdOutlineError /> PDF file not found!
   </section>
  );
}

export default FileNotFound;