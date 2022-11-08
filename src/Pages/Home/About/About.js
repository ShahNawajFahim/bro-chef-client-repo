import React from 'react';
import img from '../../../images/about-image/291bd39c9f1a29dd482c0717f0ac62ba.jpg';


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse mx-12">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">About us.</h1>
                    <p className="py-6">Bro Chef Service brings people together. Whether around the family dinner table or in an extravagant dining room, we create moments of dining luxury, personalized and presented by a team of talented, professionally-trained chefs who delight in sharing culinary excellence. The value we create comes from the care we take to listen and attend to the culinary needs and desires or our clients, and the way we work together to satisfy those preferences.</p>
                </div>
            </div>
        </div>
    );
};

export default About;