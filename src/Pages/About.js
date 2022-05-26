import React from 'react';
import Footer from '../Shared/Footer';

const About = () => {
    return (
      <>
        <div className='mx-auto mt-28 m-24 h-screen lg:w-3/5 '>
            <div class="card  bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class=" text-3xl text-primary font-bold mb-2">MY PORTFOLIO!!!</h2>
                    <p className='text-2xl font-bold mb-2'><span className='text-orange-500 font-bold'>NAME:  </span>ARMIN SULTANA</p>
                    <p className='text-2xl font-bold mb-2'><span className='text-orange-500 font-bold'>EMAIL:  </span>arminsultana556@gmail.com</p>
                    <p className='text-2xl font-bold mb-2'><span className='text-orange-500 font-bold'>EDUCATION:  </span>BSc (honors) in Computer Science And Engineering (8th semester) (National Uiversity)</p>
                    <p className='text-2xl font-bold mb-2'><span className='text-orange-500 font-bold'>PERMANENT ADDRESS:  </span><ul>
                    <li>Districts: Kishoregonj</li>
                    <li> P/S: Bhairab</li>
                    <li>P/O: Shimulkandi</li>
                    </ul></p>
                    <p className='text-2xl font-bold mt-8'><span className='text-orange-500 font-bold'>TECHNOLOGIES:  </span> I KNOW  ABOUT THIS TECHNOLOGIES!!!
                    <div className="grid lg:grid-cols-2 mt-10 ">
                    <ul className='ml-16'><li></li>
                    <li>1:JAVASCRIPT</li>
                    <li>2:BOOTSTRAP</li>
                    <li>3:REACT</li>
                    <li>4:HTML</li>
                    <li>5:CSS</li>
                   
                    <li></li></ul>
                    <ul className='mr-16'> <li>TAILWIND</li>
                    <li>6:MONGODB</li>
                    <li>7:NODE JS</li>
                    <li>8:EXPRESS JS</li></ul></div></p>
                    <p className='text-2xl font-bold mt-8 mb-2'><span className='text-orange-500 font-bold'>WEBSITE LINK 1:  </span>https://certified-career-coach.web.app/</p>
                    <p className='text-2xl font-bold mb-2'><span className='text-orange-500 font-bold'>WEBSITE LINK 2:  </span>https://perfume-ware-house-assignment.web.app/</p>
                    <p className='text-2xl font-bold mb-2'><span className='text-orange-500 font-bold'>WEBSITE LINK 3:  </span></p>
                    
                    
                    

                </div>
            </div>

        </div>
        <Footer></Footer>
      </>
    );
};

export default About;