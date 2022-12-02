import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { isLoading, error, data: bookings } = useQuery({
        queryKey: ['bookings'],
        queryFn: () =>
            fetch('https://used-furniture-server-site.vercel.app/bookings').then(res =>
                res.json()
            )
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className="w-1/2 lg:w-full p-8 border-2 border-primary rounded-lg">
            <h2 className='text-2xl text-center text-primary font-bold my-4'>My Products Information</h2>
            <table className="table table-zebra w-full border border-primary">

                <thead className='border border-primary'>
                    <tr className='border border-primary'>
                        <th></th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Location</th>
                        <th>Buy Now</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map((book, i) => <tr className='border border-primary'>
                            <th>{i + 1}</th>
                            <th><img src={book.product_img} alt="" /></th>
                            <td>{book.productName}</td>
                            <td>{book.resale_price}</td>
                            <td>{book.location}</td>
                            <Link to="/"><td className='btn btn-primary mt-8 mx-4'>Pay</td></Link>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;