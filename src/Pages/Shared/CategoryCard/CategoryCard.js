import React from 'react';

const CategoryCard = ({ product, setTargetProduct }) => {
    const { product_name, product_img, original_price, resale_price, location, uses } = product;
    return (
        <div className="card w-96 bg-base-200 shadow-xl">
            <img src={product_img} alt="" />
            <div className="card-body">
                <h2 className="card-title justify-center">{product_name}</h2>
                <div className='flex justify-between'>
                    <p> Pre Price: {original_price}</p>
                    <p>Sell Price: {resale_price}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Used: {uses}</p>
                    <p>Location: {location}</p>
                </div>
                <div className="card-actions justify-center">
                    <label 
                    htmlFor="booking-modal" 
                    className="btn btn-primary w-full text-white font-semibold"
                        onClick={() => setTargetProduct (product)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;