import React from 'react';
import { } from 'react-hook-form';

const BookingModal = ({ targetProduct, setTargetProduct }) => {
    const { product_name, original_price, resale_price } = targetProduct;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(name, email, phone)

        const booking = {
            name,
            email,
            phone,
            productName: product_name,
            resale_price,
        }
        console.log(booking);
        setTargetProduct(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='flex sm-flex-col justify-between mb-4'>
                        <p className="font-bold text-sm">{product_name}</p>
                        <p className="font-bold text-sm">prePrice: {original_price}</p>
                        <p className="font-bold text-sm"> sellPrice: {resale_price}</p>
                    </div>
                    <form onSubmit={handleBooking}>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full " />
                        <br />
                        <br />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full " />
                        <br />
                        <br />
                        <input name='phone' type="phone" placeholder="Phone Number" className="input input-bordered w-full " />
                        <br />
                        <br />
                        <br />
                        <br />
                        <input className="btn btn-primary input input-bordered w-full " type="Submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;