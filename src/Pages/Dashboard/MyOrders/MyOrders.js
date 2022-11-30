import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyOrders = () => {
    const { isLoading, error, data: bookings } = useQuery({
        queryKey: ['bookings'],
        queryFn: () =>
            fetch('http://localhost:5000/bookings').then(res =>
                res.json()
            )
    })
    console.log(bookings)

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className="overflow-x-auto w-full px-4">
            <h2 className='text-2xl text-center text-primary font-bold my-4'>My Products Information</h2>
            <table className="table table-zebra w-full ">

                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Location</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map((book, i) => <tr>
                            <th>{i + 1}</th>
                            <td>{book.productName}</td>
                            <td>{book.resale_price}</td>
                            <td>{book.location}</td>
                            <td>Delete</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;











/*

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    console.log(user)

    const url = `https://used-furniture-server-site.vercel.app/allUser?email=${user?.email}`

    const {data: allUser = []} = useQuery({
        queryKey: ['allUser', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    return (
        
        <div className="overflow-x-auto w-full px-4">
            <h2 className='text-2xl text-center text-primary font-bold my-4'>My Products Information</h2>
            <table className="table table-zebra w-full ">

                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Location</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allUser.map((user, i) => <tr>
                            <th>{i + 1}</th>
                            <td>{user.product_name}</td>
                            <td>{user.resale_price}</td>
                            <td>{user.location}</td>
                            <td>Delete</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;



*/