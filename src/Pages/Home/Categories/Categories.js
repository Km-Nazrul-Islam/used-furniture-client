import React, { useState } from 'react';
import { useEffect } from 'react';
import CategoriesCard from '../../Shared/CategoriesCard/CategoriesCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories') 
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className='my-20'>
            <div>
                <h2 className='text-3xl text-center font-bold text-primary'>Select Furniture Categories</h2>
                <p className='my-4 text-center font-extralight'>Our lives happen around our furniture. Every day, our bed frames, dining tables, dressers, and coffee tables support us, often without thanks and appreciation. Here we’re taking a look back at some of the best acknowledgements of the importance our furniture plays in our lives. We’ve assembled what we think are the best furniture quotes of all time.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    categories.map(category => <CategoriesCard
                        key={category.id}
                        category={category}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;