import React, { useEffect, useState } from 'react';

const ReviewsSection = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=> res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div className="">
            <h1 className='text-4xl mt-16 mb-6 text-center text-primary font-bold'>WHAT CUSTOMER SAY!!!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
            
            {
                review.map(r=><div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                  <img src={r.img}alt="Shoes" class="rounded-full" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Name:{r.name}</h2>
                  <h2 class="card-title text-orange-500">Ratings: {r.ratings ==5 && <p className='rating'>
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                      </p>}
                      {
                          r.ratings==3 && <p className='rating'>
                              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"  />
                              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />

                          </p>

                      }
                      {
                          r.ratings==4 && <p className='rating'>
                               <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                               <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                               <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                               <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                               <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-100" />

                          </p> 
                      }
                      </h2>
                  <p>Description{r.description}</p>
                  
                </div>
              </div>)
            }
            
        </div>
        </div>
    );
};

export default ReviewsSection;