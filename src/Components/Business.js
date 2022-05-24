import React from 'react';
import logo from '../assets/images/icon1.png'
import logo2 from '../assets/images/icon2.png'
import logo3 from '../assets/images/icon3.png'


const Business = () => {
    return (
        <div className="ml-24">
            <h1 className='text-5xl mt-24  mb-5 text-center text-primary font-bold py-6'>OUR BUISNESS SUMMARY!!!</h1>
            <div class="divider w-1/5 mx-auto h-1 mb-5 bg-primary"></div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:ml-10 mb-40'>

                <div class="card w-96 bg-base-100 ">
                    <figure class="px-10 pt-10">
                        <img src={logo} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-2xl font-bold'>Reliable Services</p>
                        <p>Every service our computer technicians provide is guaranteed to be prompt & reliable.</p></div>
                    <div className="mx-auto">
                        <h1 className='text-xl font-semibold ml-5'>Served</h1>
                        <h1 className='text-4xl font-bold text-primary'>100 K</h1>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 ">
                    <figure class="px-10 pt-10">
                        <img src={logo2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-2xl font-bold'>Skilled Personal</p>
                        <p>All the experts at Fixoria have the skills & experience to get the job done right.</p>
                    </div>
                    <div className="mx-auto">
                        <h1 className='text-xl font-semibold ml-5'>Customer</h1>
                        <h1 className='text-4xl font-bold text-primary'>150 + M</h1>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 ">
                    <figure class="px-10 pt-10">
                        <img src={logo3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-2xl font-bold'>Licensed & Certified</p>
                        <p>or your safety and peace of mind, we're fully licensed, certified, and insured!</p>
                        

                    </div>
                    <div className="mx-auto">
                        <h1 className='text-xl font-semibold ms-2'>Annual Revenue</h1>
                        <h1 className='text-4xl font-bold text-primary'>33.50 k</h1>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Business;