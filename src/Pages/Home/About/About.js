import React from 'react';
import img from '../../../images/about-image/291bd39c9f1a29dd482c0717f0ac62ba.jpg';


const About = () => {
    return (
        <div className="hero min-h-screen bg-stone-400 rounded-xl mb-12" data-aos="fade-up-left">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='text-black'>
                    <h1 className="text-5xl font-bold">About.</h1>
                    <p className="py-6">Bro Chef Service brings people together. Whether around the family dinner table or in an extravagant dining room,create moments of dining luxury, personalized and presented by a professionally-trained chef who delight in sharing culinary excellence. The value i create comes from the care i take to listen and attend to the culinary needs and desires or our clients, and the way i work  to satisfy those preferences.</p>
                </div>
            </div>
        </div>
    );
};

export default About;