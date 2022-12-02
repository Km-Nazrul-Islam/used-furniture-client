import React from 'react';
import toast from 'react-hot-toast';

const CategoryCard = ({ product, setTargetProduct }) => {
    const { product_name, product_img, original_price, resale_price, location, uses, seller_name, email, postDate } = product;

    const handlerreport = (r) => {
        fetch("https://used-furniture-server-site.vercel.app/report", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(r),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Report this product");
            });
    };

    return (
        <div className="card w-96 bg-base-200 shadow-xl">
            <img src={product_img} alt="" />
            <div className="card-body">
                <h2 className="card-title justify-center text-primary font-bold">{product_name}</h2>
                <div>
                    <div className='flex justify-between'>
                    <p> Pre Price: {original_price}</p>
                    <p>Sell Price: {resale_price}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Used: {uses}</p>
                    <p>Location: {location}</p>
                </div>
                </div>
                <div className='border border-primary text-center rounded-lg my-2'>
                    <p>Seller Name: {seller_name}</p>
                    <p>Email: {email}</p>
                    <p>Posted Date: {postDate}</p>
                </div>
                
                <div className="card-actions justify-center">
                    <label 
                    htmlFor="booking-modal" 
                    className="btn btn-primary w-full text-white font-semibold"
                        onClick={() => setTargetProduct (product)}
                    >Book Now</label>
                    <label
                        onClick={() => handlerreport(product)}
                        className="btn btn-sm btn-outline btn-primary w-full"
                    >
                        Report
                    </label>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;