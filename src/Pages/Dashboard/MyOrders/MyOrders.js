import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/allUser?email=${user?.email}`

    const {data: allUser = []} = useQuery({
        queryKey: ['allUser', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    return (
        
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;






/*

<div>
            <h2 className='text-2xl text-center text-primary font-bold my-4'>My Total Orders Products Information</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            allUser.map((user, i) => <tr>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>Delete</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>


*/