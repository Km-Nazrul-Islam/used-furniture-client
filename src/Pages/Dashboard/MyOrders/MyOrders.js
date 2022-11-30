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
    console.log("use")

    return (
        
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full ">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin Role</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allUser.map((user, i) => <tr>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
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