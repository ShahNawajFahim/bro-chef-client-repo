import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import FormReview from './Review/FormReview/FormReview';
import MapReview from './Review/MapReview/MapReview';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const service = useLoaderData();
    const { name, picture, price, detail } = service;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{detail}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Price</div>
                        <div className="badge badge-outline">${price}</div>
                    </div>
                </div>
            </div>

            <div>
                <FormReview></FormReview>
                <MapReview></MapReview>
            </div>


        </div>
    );
};

export default ServiceDetails;