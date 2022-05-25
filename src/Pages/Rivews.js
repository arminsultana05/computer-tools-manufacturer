import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Swal from 'sweetalert2'
import Loading from '../Shared/Loading';

const Rivews = () => {
    const [user ,loading] = useAuthState(auth)
    if(loading){
        return <Loading></Loading>
    }
    const handleForm = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const rating = e.target.number.value;

        const img = e.target.image.value;

        const ratings = parseInt(rating)
        const user = { name, description, ratings, img };
        console.log(user);
        if (ratings >= 1 && ratings <= 5) {
            const url = `http://localhost:5000/review`
            fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((data) => {
                    e.target.reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully Added Your Review In Home Page',
                        showConfirmButton: false,
                        timer: 1500
                    })


                });

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Enter Valid Ratings!',
                footer: '<a href="">Why do I have this issue?</a>'
            })

        }

    }
    return (
        <div>
            <div className="card w-2/3 bg-base-100 shadow-xl flex mx-auto mt-12">
                <div className="card-body">
                    <h2 className="card-title mx-auto text-primary">CUSTOMER REVIEW !!!</h2>
                    <form onSubmit={handleForm} >
                        <input className=' w-full border rounded-xl  border-purple-400 mt-3 p-3' type="text" name="name" placeholder='user-name' value={user.displayName} />
                        <br />
                        <input className=' w-full border rounded-xl   border-purple-400 mt-3 p-3' type="number" name="number" placeholder='rating' />
                        <br />
                       
                        <input className=' w-full border rounded-xl   border-purple-400 mt-3 p-3' type="text" name="image" placeholder='image' value={user.photoURL} />
                        <br />

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>

                            </label>
                            <textarea className="textarea textarea-bordered h-24" name="description" placeholder="Discription" ></textarea>

                        </div>

                        <input className='btn btn-primary text-white w-full mt-5' type="submit" value="ADD REVIEW" />
                    </form>


                </div>


            </div>

        </div>
    );
};

export default Rivews;