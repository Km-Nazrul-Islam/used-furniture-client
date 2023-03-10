import React from 'react';
import { Link } from 'react-router-dom';
import Chevron from 'react-chevron';

const Footer = () => {
    return (
        <section>
            <footer>
                <div className='p-10 bg-gray-800 text-gray-200'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                            <div className='mb-5'>
                                <h4 className='text-2xl pb-4'>Company</h4>
                                <p className='text-gray-500'>
                                    Rajshahi, Bangladesh <br />
                                    Bagmara Road 99876 <br />
                                    Rajshahi. <br /><br />
                                    <strong>Phone</strong> +88 017 72 82 49 60 <br />
                                    <strong>Email:</strong> imamonlinemart24@gmail.com
                                </p>
                            </div>
                            <div className='mb-5'>
                                <h4 className='pb-4'>Usefull Link:</h4>
                                <ul className='text-gray-500'>
                                    <li className='pb-4'><i className='fa fa-chevron-right'></i> <a href="#" className='hover:text-yellow-500'>Home</a></li>
                                    <li className='pb-4'><i className='fa fa-chevron-right'></i> <a href="#" className='hover:text-yellow-500'>About</a></li>
                                    <li className='pb-4'><i className='fa fa-chevron-right'></i> <a href="#" className='hover:text-yellow-500'>Services</a></li>
                                    <li className='pb-4'><i className='fa fa-chevron-right'></i> <a href="#" className='hover:text-yellow-500'>terms of services</a></li>
                                    <li className='pb-4'><i className='fa fa-chevron-right'><a href="#" className='hover:text-yellow-500'>Privacy policy</a></i></li>
                                </ul>
                            </div>
                            <div className='mb-5'>
                                <h4 className='pb-4'>Our Services</h4>
                                <ul className='text-gray-500'>
                                    <li className='pb-4'><i className='fa fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'>Home Decoretion</a></li>
                                    <li className='pb-4'><i className='fa fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'>Office Decoration</a></li>
                                    <li className='pb-4'><i className='fa fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'>Resturent Intirior</a></li>
                                    <li className='pb-4'><i className='fa fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'>Used Furniture Sell</a></li>
                                    <li className='pb-4'><i className='fa fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'>Adviertice Marketing</a></li>
                                </ul>
                            </div>
                            <div className='mb-5'>
                                <h4 className='pb-4'>Join Our Team</h4>
                                <p className='text-gray-500'>Join our market place and find out new <br />
                                to Imam Furniture Mart</p>
                                <form className='flex flex-row flex-wrap'>
                                    <input type="text" className='text-gray-500 w-2/3 p-2 focus:border-yellow-500' placeholder='type@email.com'/>
                                    <button className='p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600'>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-900 text-gray-500 px-10'>
                    <div>
                        <div className='text-center'>
                            <div>
                                Copyright <strong><span>company</span></strong>. All Rigth Resereved
                            </div>
                            <div><a href="#" className='text-yellow-500'>Powerd By Imam Furniture Mart</a></div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;



/*

<div className=''>
            
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img src="https://i.ibb.co/6RQTDDJ/imam.png" alt="" />
                    <p className='lg:ml-72 text-center'>Imam Used Furniture Ltd. <br />We Provide Only Used Furniture Collection</p>

                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link to=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                        <Link to='https://www.youtube.com/@imamfurnituremart8042/videos'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                        <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    </div>
                </div>
            </footer>
        </div>

*/