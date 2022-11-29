import React from 'react';
import { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../Shared/CategoryCard/CategoryCard';

const Category = () => {
    const [targetProduct, setTargetProduct] = useState(null);
    const {category} = useLoaderData();
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                {
                    category.map(product => <CategoryCard
                        key={product._id}
                        product={product}
                        setTargetProduct={setTargetProduct}
                    ></CategoryCard>)
                }
            </div>
            {
                targetProduct &&
                <BookingModal
                targetProduct={targetProduct}
                ></BookingModal>
            }
        </section>
    );
};

export default Category;