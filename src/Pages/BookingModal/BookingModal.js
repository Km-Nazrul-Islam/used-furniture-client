import React, { useContext } from 'react';
import { } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ targetProduct, setTargetProduct }) => {
    const {user} = useContext(AuthContext);
    console.log(user)
    const { product_name, original_price, resale_price, location } = targetProduct;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        toast('Your Booking Is Done')

        const booking = {
            name,
            email,
            phone,
            productName: product_name,
            resale_price,
            location
        }
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
        setTargetProduct(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleBooking}>
                        <input name='name' type="text" placeholder="Your Name" defaultValue={`Customer Name: ${user?.displayName}`} disabled className="input input-bordered w-full " />
                        <br />
                        <br />
                        <input name='email' type="text" placeholder="Your Email Address" defaultValue={`Customer Email: ${user?.email}`} disabled className="input input-bordered w-full " />
                        <br />
                        <br />
                        <input name='product_name' type="text" placeholder="Your Selected Product" defaultValue={`Product Name: ${product_name}`} disabled className="input input-bordered w-full " />
                        <br />
                        <br />
                        <input name='name' type="text" placeholder="Original Price" defaultValue={`Original Price : ${original_price}`} disabled className="input input-bordered w-full " />
                        <br />
                        <br />
                        <input name='name' type="text" placeholder="Resell Price" defaultValue={`Resell Price : ${resale_price}`} disabled className="input input-bordered w-full " />
                        <br />
                        <br />
                        <input name='phone' type="phone" placeholder="Contact Phone Number" className="input input-bordered w-full " />
                        <br />
                        <br />
                        <input name='location' type="location" placeholder="Meeting Location" className="input input-bordered w-full " />
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