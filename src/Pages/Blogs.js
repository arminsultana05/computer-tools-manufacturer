import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-28 mb-10 mx-auto '>
            <div class="card w-3/3 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className="">
                        <h1 className='text-2xl text-blue-500  font-bold'>Q:1 HOW WILL YOU IMPROVE THE PERFORMANE OF A   REACT APPLICATION?</h1>
                        <p className='text-xl text left font-bold'>Answer: </p>
                        <ul className='text-xl'>
                            <li>1: Keeping component state local where necessary.</li>
                            <li>2:Memoizing React components to prevent unnecessary re-renders.</li>
                            <li>3: Code-splitting in React using dynamic import()</li>
                            <li>4: Windowing or list virtualization in React.</li>
                            <li>5:Lazy loading images in React.</li>
                        </ul>

                    </div>
                    <div className="">
                        <h1 className='text-2xl text-blue-500  font-bold'>Q:2 WHAT ARE THE DIFFERENT WAYS TO MANAGE A STATE IN REACT APPLICATION?</h1>
                        <p className='text-xl text left font-bold'>Answer: </p>
                        <p className='text-xl'>
                            React uses an observable object as the state that observes what changes are made to <br /> the state and helps the component behave accordingly</p>
                        <ul className='text-xl' >
                            <li>1:Data State. ...</li>
                            <li>2: Control State</li>
                            <li>3: Session State.</li>
                            <li>4: Location State.</li>
                            <li>onclusion</li>
                        </ul>

                    </div>
                    <div className="">
                        <h1 className='text-2xl text-blue-500  font-bold'>Q:3 HOW DOES PROTOTYPICAL INHERITANCE WORK  ?</h1>
                        <p className='text-xl text left font-bold'>Answer: </p>
                        <p className='text-xl'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by <br /> which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the <br /> [[Prototype]] of an object,  we use Object. getPrototypeOf and  Object.Prototype-based programming is a style  <br />of object-oriented  programming in which behaviour reuse (known as inheritance) is performed via a process <br /> of reusing  existing objects that serve as prototypes.</p>


                    </div>
                    <div className="">
                        <h1 className='text-2xl text-blue-500  font-bold'>Q:4 Why you do not set the state directly in React.For example , ifyou have const [products, setProducts]= <br /> useState([])  .Why you donot setproduct =[...] instead,You use the setProduts?</h1>
                        <p className='text-xl text left font-bold'>Answer: </p>
                        <p className='text-xl'>If you update it directly, calling the setState() afterward may just replace the update you made.When you directly update the  <br /> state, it does not change this.state immediately. Instead, it creates a pending state transition and accessing <br /> it after calling this method will only return the present value. <br /> You will lose control of the state across all components. </p>
                        
                    </div>
                    <div className="">
                        <h1 className='text-2xl text-blue-500  font-bold'>Q:5 WHAT IS A UNIT TEST? WHY SHOULD WRITE UNIT TESTS?</h1>
                        <p className='text-xl text left font-bold'>Answer: </p>
                        <p className='text-xl'>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application <br />  (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be <br />an entire module, but it is more commonly an individual function or procedure. <br />In object-oriented programming, a unit is often an entire interface, such as a class, or an <br />individual method. By writing tests first for the smallest testable units, then the compound <br />behaviors between those, one can build up comprehensive tests for <br /> complex applications.</p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blogs;