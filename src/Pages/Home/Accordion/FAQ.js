import React from 'react';

const FAQ = () => {
    return (
        <div className='text-center mb-20 '>

            <h1 className='text-5xl mb-8'>FAQ's</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-stone-400 text-black">
                    What's your best service?
                </div>
                <div className="collapse-content">
                    <p>All of the services are good enough. You can relay on my services.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-stone-400 text-black">
                    IS this services available any time?
                </div>
                <div className="collapse-content">
                    <p>No ,after 12pm the services are closed. And it is start from 8am.</p>
                </div>
            </div>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-stone-400 text-black">
                    Does the charge you demand can be considered a little?
                </div>
                <div className="collapse-content">
                    <p>Sorry for this convenience. It is not possible for me to do so.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;