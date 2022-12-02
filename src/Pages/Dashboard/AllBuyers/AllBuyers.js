import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const AllBuyers = () => {

    const role = {
        role: "buyer",
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
    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/allUser/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("delete successfully");
                }
            });
    };

    return (
        <div className='border-2 border-primary rounded-lg w-full p-8'>
            <h2 className='text-2xl text-center text-primary font-bold my-4'>All Buyers Information</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete Buyers</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            users.map((user, i) => <tr>

                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            <td className='btn btn-primary mx-4'> 
                            
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn btn-sm"
                                    >
                                        Delete
                                    </button>
                            
                            </td>

                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;