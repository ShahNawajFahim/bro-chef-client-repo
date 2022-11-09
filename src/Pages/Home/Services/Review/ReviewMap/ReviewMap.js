// import React, { useEffect, useState } from 'react';
// import ShowReview from '../ShowReview/ShowReview';

// const ReviewMap = () => {

//     const [reviews, setReviews] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/reviews')
//             .then(res => res.json())
//             .then(data => console.log(data))

//     }, [])



//     return (
//         <div>
//             <div className='grid gap-2 grid-cols-1 md:grid-cols2 lg:grid-cols-3 ml-5 lg:ml-12'>
//                 {
//                     reviews.map(review => <ShowReview
//                         key={review._id}
//                         review={review}

//                     ></ShowReview>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default ReviewMap;