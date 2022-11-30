import React from 'react';

const AddProduct = () => {
    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const category_id = form.category_id.value;
        const productName = form.product.value;
        const quality = form.quality.value;
        const originalPrice = form.originalPrice.value;
        const resellPrice = form.resellPrice.value;
        const useOfYear = form.useOfYear.value;
        const productCondition = form.productCondition.value;
        const location = form.location.value;
        const dates = form.date.value;

        const addProduct = {
            category_id,
            productName,
            quality,
            originalPrice,
            resellPrice,
            useOfYear,
            productCondition,
            location,
            dates,
        }

        fetch(`http://localhost:5000/category/${category_id}`,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addProduct)
        })
    }
    return (
        <div>
            <form onSubmit={handleAddProduct}>

                <input name='category_id' type="number" placeholder="Your Product Category" className="input input-bordered w-full " />
                <br />
                <br />
                <input name='product' type="text" placeholder="Your Product Name" className="input input-bordered w-full " />
                <br />
                <br />
                <input name='quality' type="text" placeholder="Your Product Quality" className="input input-bordered w-full " />
                <br />
                <br />
                <input name='originalPrice' type="text" placeholder="Original Product Price" className="input input-bordered w-full " />
                <br />
                <br />
                <input name='resellPrice' type="text" placeholder="Resell Product Price" className="input input-bordered w-full " />
                <br />
                <br />
                <input name='useOfYear' type="text" placeholder="Product Uses Year" className="input input-bordered w-full " />
                <br />
                <br />
                <input name='productCondition' type="phone" placeholder="Product Condition" className="input input-bordered w-full " />
                <br />
                <br />
                <input name='location' type="location" placeholder="Meeting Location" className="input input-bordered w-full " />
                <br />
                <br />
                <input name='date' type="date" className="input input-bordered w-full " />
                <br />
                <br />
                <input className="btn btn-primary input input-bordered w-full " type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;