import React from 'react';

const Report = ({ report, handlereportDelete }) => {
    const {_id, product_name, resale_price } = report;
    console.log(report)
    return (
        <div className='border-2 border-primary rounded-lg w-full p-8 my-4'>
            <h2 className='text-2xl text-center text-primary font-bold my-4'>Reported Products Details</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Delete Buyers</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                             <tr>

                            <th><img src={report.product_img} alt="" /></th>
                            <td>{report.product_name}</td>
                            <td>{report.resale_price}</td>
                                <td>

                                    <button
                                        onClick={() => handlereportDelete(_id)}
                                        className="btn btn-sm btn-primary"
                                    >
                                        Delete Item
                                    </button>

                                </td>

                            </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Report;




/*

<button
                                        onClick={() => handlereportDelete(_id)}
                                        className="btn btn-sm btn-primary"
                                    >
                                        Delete
                                    </button>

*/