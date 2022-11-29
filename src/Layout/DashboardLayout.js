import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/user/${user?.email}`)
        .then(res => res.json())
            .then(data => setCurrentUser(data))
    }, [user?.email])

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile my-20">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                           
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
                                
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                                
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side mr-2">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-200 text-base-content">
                        {
                            currentUser?.role==="admin"?
                            <>

                                    <Link><li>All Seller</li></Link>
                                    <Link><li>All Buyer</li></Link>
                                    <Link><li>Reported Item</li></Link>
                            </>
                            :
                            currentUser?.role === "seller" ? 
                            <>

                                        <Link><li>Add Product</li></Link>
                                        <Link><li>My Products</li></Link>
                            </>
                            :
                                    <Link><li>My Order</li></Link>
                        }
                        
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;