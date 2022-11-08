import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-5xl font-bold mb-2 mt-10'>  Our Service Area</h2>
                <p className='mb-10'>We specialized in intimate catering. Think about your <br></br>
                    last party.It was probably a great time with <br></br> amazing friends.
                </p>
            </div>
            <div className='grid gap-2 grid-cols-1 md:grid-cols2 lg:grid-cols-3 ml-5 lg:ml-12'>
                {
                    Services.map(service => <ServiceCard
                        key={service._id}
                        service={service}

                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;