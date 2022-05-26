import React from 'react';
import './Banner2.css'

const Banner2 = () => {
    return (
        <div>
            <h1 className='text-5xl mt-24  mb-5 text-center text-primary font-bold py-6'>MORE INFORMATION!!!</h1>

            <div className='bannerses flex justify-center items-center mt-16 mb-16 '>
                <div className="mt-72">
                    <h1 className='text-5xl font-bold lg:text-primary'>WE MANUFACTURE <br /> ALL KIND OF <br />COMPUTER PARTS !!!</h1>
                    <p className='text-xl font-semibold mt-2 mb-4'>All kinds of computer parts are manufactured here <br /> We are always on the lookout for customer satisfaction...</p>
                    <button className="btn btn-primary w- rounded-xl text-center px-10">EXPLORE MORE</button>
                </div>

            </div>

        </div>
    );
};

export default Banner2;