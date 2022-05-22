import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner flex justify-center items-center'>
            <div className="">
            <h1 className='lg:text-5xl font-bold'>PROFESSIONAL <br /> COMPUTER <br /> PARTS MANUFACTURER!!!</h1>
            <p className='text-xl font-semibold mt-2 mb-4'>We manufacture high quality computer parts. <br /> And over 10 years we have earned customer loyalty...</p>
            <button class="btn btn-primary rounded-full">EXPLORE MORE</button>
            </div>
            
        </div>
    );
};

export default Banner;