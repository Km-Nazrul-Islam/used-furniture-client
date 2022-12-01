import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {

    const role = {
        role: "seller",
    };
    const {
        isLoading,
        error,
        data: users = [],
    } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
            fetch(`http://localhost:5000/users/${role.role}`).then(
                (res) => res.json()
            ),
    });
    console.log(users)

    return (
        <div className='border-2 border-primary rounded-lg w-full p-8'>
            <h2 className='text-2xl text-center text-primary font-bold my-4'>All Seller Information</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Job</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            users.map((user, i) => <tr>

                                <th>{i + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>Delete</td>

                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;