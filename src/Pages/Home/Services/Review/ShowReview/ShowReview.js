import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ShowReview = () => {


    const reviews = useLoaderData();
    // console.log(reviews);

    const { UserImg, message, customer, serviceName, email } = reviews;

    return (
        <div className=''>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h3>{serviceName}</h3>
                    <img className='rounded-full border-2' src={UserImg} alt="" style={{ height: '70px' }} />
                    <h2 className="card-title">{customer}</h2>
                    <h5>Mail:{email}</h5>
                    <p>{message}</p>

                </div>
            </div>
        </div>
    );
};

export default ShowReview;