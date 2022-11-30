import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border-2 border-red-500 rounded-xl p-4'>
                <h2 className='text-xl text-center text-red-500'> <span className='text-2xl text-red-600 font-bold'>Ques-1:</span> What are the different ways to manage a state in a React application?</h2>
                <br />
                <p className='text-xl text-center text-red-500'> <span className='text-2xl text-red-600 font-bold'>Ans:</span> React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.</p>
            </div>

            <div className='border-2 border-green-500 rounded-xl p-4 my-8'>
                <h2 className='text-xl text-center text-green-500'> <span className='text-2xl text-green-600 font-bold'>Ques-2:</span>  How does prototypical inheritance work?</h2>
                <br />
                <p className='text-xl text-center text-green-500'> <span className='text-2xl text-green-600 font-bold'>Ans:</span> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>

            <div className='border-2 border-pink-500 rounded-xl p-4 my-8'>
                <h2 className='text-xl text-center text-pink-500'> <span className='text-2xl text-pink-600 font-bold'>Ques-3:</span>What is a unit test? Why should we write unit tests?</h2>
                <br />
                <p className='text-xl text-center text-pink-500'> <span className='text-2xl text-pink-600 font-bold'>Ans:</span>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>

            <div className='border-2 border-orange-500 rounded-xl p-4 my-8'>
                <h2 className='text-xl text-center text-orange-500'> <span className='text-2xl text-orange-600 font-bold'>Ques-3:</span>What is deferrence React vs. Angular vs. Vue?</h2>
                <br />
                <p className='text-xl text-center text-orange-500'> <span className='text-2xl text-orange-600 font-bold'>Ans:</span>Vue provides higher customizability and hence is easier to learn than Angular or React.Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components.Hence, the transition to Vue from either of the two is an easy option..</p>
            </div>
        </div>
    );
};

export default Blog;