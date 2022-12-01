// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState([]);

    useEffect(() => {
        fetch(`https://used-furniture-server-site.vercel.app/users/user/${user?.email}`)
        .then(res => res.json())
            .then(data => setCurrentUser(data))
    }, [user?.email])

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center bg-gray-300 rounded-xl m-4">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side w-96">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu px-4 w-80 bg-gray-300 rounded-xl m-4 border-2 border-primary">
                        
                        {
                            currentUser?.role === "admin" ?
                                <>

                                    <Link to="/dashboard/allseller" className='text-center text-2xl text-gray-700 font-bold bg-orange-300 hover:bg-orange-500 rounded-2xl py-2 my-4'><li>All Seller</li></Link>

                                    <Link to="/dashboard/allbuyers" className='text-center text-2xl text-gray-700 font-bold bg-orange-300 hover:bg-orange-500 rounded-2xl py-2 my-4'><li>All Buyer</li></Link>

                                    <Link to="/dashboard/allreporteditem" className='text-center text-2xl text-gray-700 font-bold bg-orange-300 hover:bg-orange-500 rounded-2xl py-2 my-4'><li>Reported Item</li></Link>
                                </>
                                :
                                currentUser?.role === "seller" ?
                                    <>

                                        <Link to="/dashboard/addproduct" className='text-center text-2xl text-gray-700 font-bold bg-orange-300 hover:bg-orange-500 rounded-2xl py-2 my-4'><li>Add Product</li></Link>

                                        <Link to="/dashboard/myproducts" className='text-center text-2xl text-gray-700 font-bold bg-orange-300 hover:bg-orange-500 rounded-2xl py-2 my-4'><li>My Product</li></Link>
                                    </>
                                    :
                                    <Link to="/dashboard/myorders" className='text-center text-2xl text-gray-700 font-bold bg-orange-300 hover:bg-orange-400 rounded-xl py-2 my-4'><li>My Order</li></Link>
                        }

                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;
