import React, { useState, useEffect } from 'react';
import CardReview from '../CardReview/CardReview';


const MapReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <CardReview
                        key={review._id}
                        review={review}
                    ></CardReview>)
                }
            </div>
        </div>
    );
};

export default MapReview;