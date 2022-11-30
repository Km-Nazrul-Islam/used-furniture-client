import { useQuery } from '@tanstack/react-query';
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

    const url = `http://localhost:5000/allUser?email=${user?.email}`

    const { data: allUser = [] } = useQuery({
        queryKey: ['allUser', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    

    useEffect(() => {
        fetch(`http://localhost:5000/users/user/${user?.email}`)
        .then(res => res.json())
            .then(data => setCurrentUser(data))
    }, [user?.email])

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile my-20 bg-primary rounded-lg">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mt-16 mx-4">
                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Product Menu</label>

                </div>
                <div className="drawer-side mr-2">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gray-200 m-4 rounded-lg mt-16">
                        {
                            currentUser?.role==="admin"?
                            <>

                                    <Link className='text-center text-2xl text-gray-700 font-bold bg-orange-300 hover:bg-orange-500 rounded-2xl py-2 my-4'><li>All Seller</li></Link>
                                    <Link className='text-center text-2xl text-gray-700 font-bold bg-orange-300 hover:bg-orange-500 rounded-2xl py-2 my-4'><li>All Buyer</li></Link>
                                    <Link className='text-center text-2xl text-gray-700 font-bold bg-orange-300 hover:bg-orange-500 rounded-2xl py-2 my-4'><li>Reported Item</li></Link>
                            </>
                            :
                            currentUser?.role === "seller" ? 
                            <>

                                        <Link className='text-center text-2xl text-gray-700 font-bold bg-orange-300 hover:bg-orange-500 rounded-2xl py-2 my-4'><li>Add Product</li></Link>
                                        <Link className='text-center text-2xl text-gray-700 font-bold bg-orange-300 hover:bg-orange-500 rounded-2xl py-2 my-4'><li>My Product</li></Link>
                            </>
                            :
                                    <Link to="/dashboard/myorders" className='text-center text-2xl text-gray-700 font-bold bg-orange-300 hover:bg-orange-500 rounded-2xl py-2 my-4'><li>My Order</li></Link>
                        }
                        
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;