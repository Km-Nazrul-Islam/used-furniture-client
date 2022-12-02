import React from 'react';

const MyProducts = () => {
    return (
        <div className='w-full p-8 border-2 border-primary rounded-lg'>
            <h2 className='text-2xl text-center text-primary font-bold my-4'>My Products Details</h2>
            <table className="table table-zebra w-full border border-primary">

                <thead className='border border-primary'>
                    <tr className='border border-primary'>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Condition</th>
                        <th>Sales Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    
                        <tr className='border border-primary font-semibold bg-white'>
                            <th></th>
                            <th>Wooden Bed</th>
                            <td>19000 tk</td>
                            <td>2 Years Used</td>
                            <td>Available</td>
                            <td>Delete</td>
                        </tr>
                    

                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;