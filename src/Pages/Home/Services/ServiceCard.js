import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, picture, name, price, detail } = service;
    return (
        <div className="card w-80 bg-black shadow-xl mb-12 rounded-xl " data-aos="flip-down">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{detail.slice(0, 99)}...</p>
                <h4 className='text-xl'>Price:{price}$</h4>
                <div className="card-actions">
                    <Link to={`/services/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;