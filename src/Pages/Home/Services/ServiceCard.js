import React from 'react';

const ServiceCard = ({ service }) => {
    const { picture, name, price } = service;
    return (
        <div className="card w-80 bg-secondary shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h4 className='text-xl'>Price:{price}$</h4>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;