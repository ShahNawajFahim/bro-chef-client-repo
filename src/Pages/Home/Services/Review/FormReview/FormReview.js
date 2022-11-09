import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';




const FormReview = () => {
    const { _id, name } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.Name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const UserImg = user?.photoURL || <FaUser></FaUser>;

        const review = {

            service: _id,
            serviceName: name,
            customer: userName,
            email,
            message,
            UserImg
        }



        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('POSTED YOUR COMMENT')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div className='text-center d-flex justify-content-center mb-20 bg-stone-400 rounded-xl pt-4 pb-4 mt-20 '>
            <div className=' mt-8 mb-8 text-black'>
                <h2 className='text-5xl font-bold mb-2'>Review </h2>
                <p>Customer satisfaction is our first priority. Please comment here about our services. Thank you in advance.</p>
            </div>



            <form onSubmit={handleReview}>
                <div className='mx-auto mb-3'>
                    <div className='mb-1 flex justify-center '>
                        {user?.photoURL ?
                            <img className='rounded-full border-2' src={user?.photoURL} alt="" style={{ height: '70px' }} />
                            : <FaUser></FaUser>
                        }
                    </div>

                    <input type="email" defaultValue={user?.email} className="input input-bordered input-xs w-full max-w-xs mb-1 text-center" readOnly /> <br />
                    <span className='font-bold text-black'>NAME:</span> <input type="text" name="Name" placeholder="type your name" className="input input-bordered input-sm  max-w-xs mb-1 bg-white text-black" /><br />
                    <textarea type="text" name="message" className="textarea textarea-info bg-white text-black rounded-xl w-3/6" placeholder="start typing comment"></textarea><br />
                    {
                        user?.email ? <input className='btn btn-info mb-12 font-bold' type="submit" value="POST" /> :
                            <Link to='/login' className='btn btn-info mb-12 font-bold'>POST</Link>
                    }
                </div>

            </form>
        </div>
    );
};

export default FormReview;