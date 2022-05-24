import React from 'react';

const Extrasession = () => {
    return (
       <div >
           <h1 className='text-3xl mt-24  mb-5 text-center text-primary font-bold py-6'>SELECT YOUR PACKAGE!!!</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:ml-24 mb-24">
            
            <div className="card w-96 bg-base-200 text-neutral-content">
                <div className="card-body items-center text-center text-neutral">
                    <h2 className=" bg-orange-300 w-96 py-10 -mt-14 text-4xl">Basic <br /> <span className='text-xl'>PERFECT FOR SIMPLE MANUFACTURE</span></h2>
                    <p className='text-5xl font-semibold mb-9 p-7 mt-9'>$15.00.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary p-4">ORDER NOW</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-200 text-neutral-content">
                <div className="card-body items-center text-center text-neutral">
                    <h2 className=" bg-orange-300 w-96 py-10 -mt-14 text-4xl">Standard <br /> <span className='text-xl'>MOST POPULAR</span></h2>
                    <p className='text-5xl font-semibold mb-9 p-7 mt-9'>$20.00</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary p-4">ORDER NOW</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-200 text-neutral-content">
                <div className="card-body items-center text-center text-neutral">
                    <h2 className=" bg-orange-300 w-96 py-10 -mt-14 text-4xl">Ultimate <br /> <span className='text-xl'>ALL SERVICES ARE INCLUDED</span></h2>
                    <p className='text-5xl font-semibold mb-9 p-7 mt-9'>$25.00</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary p-4">ORDER NOW</button>
                    </div>
                </div>
            </div>
            
            

        </div>
       </div>
    );
};

export default Extrasession;