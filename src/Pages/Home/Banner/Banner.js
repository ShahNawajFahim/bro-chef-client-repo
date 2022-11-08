import React from 'react';
import img1 from '../../../images/slider-image/24_michelin_star_01_©iStock.jpg';
import img2 from '../../../images/slider-image/l-intro-1645057933.jpg';
import img3 from '../../../images/slider-image/Top-5-Michelin-Star-Chef-Restaurants-In-Dubai-Cover-17-10.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <h1 className='text-5xl font-bold'>Welcome & enjoy world class cuisine.</h1>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <h1 className='text-5xl font-bold'>Table Ready Meals.</h1>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <h1 className='text-5xl font-bold'>Services by your choice</h1>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;