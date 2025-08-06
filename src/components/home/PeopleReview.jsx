import React from 'react';
import { ImQuotesLeft,ImQuotesRight  } from "react-icons/im";
import user1Picture from  "../../assets/images/user-1-review.avif";
import user2Picture from  "../../assets/images/user-2-review.avif";
import user3Picture from  "../../assets/images/user-3-review.png";

 const reviews = [
  {
    "username": "PowerReader2024",
    "content": "Switched from 3 other libraries and never looked back! The 1-click borrowing and lightning-fast search convinced me to stay forever. 10/10 would recommend!",
    "picture": user1Picture
  },
  {
    "username": "PhD_Researcher",
    "content": "Saved 17 hours/week thanks to your AI-powered citation tools and offline sync. My thesis committee was impressed by my sources!",
    "picture": user2Picture
  },
  {
    "username": "MomWhoReads",
    "content": "Finally a library app my kids AND I love! Family accounts + reading timers = peaceful evenings. Worth every penny!",
    "picture": user3Picture
  },
  ];

const reviewsCard = reviews.map((review,index) =>{
 return <li key={index} className="review-card">
       <div>
          <span> <img src={review.picture} alt={review.username} /> </span>
          <h4> { review.username } </h4>
          <p>
             <ImQuotesLeft /> { review.content }<ImQuotesRight  className="float-right"/>
          </p>
       </div>
  </li>
});


function PeopleReview() {
  return (
   <section>
      <h2>What Our Readers Say!</h2>
      <ul className="review-wrapper">
        { reviewsCard  }
      </ul>
   </section>
  );
}

export default PeopleReview;