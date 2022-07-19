import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className='bg-indigo-100 '>
                <h4 className='ml-28 p-3'>Call For Order: <span className=' text-lg font-bold'>09643445566</span> </h4>
            </div>
            <div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 ml-32 p-5'>
                    <div className='grid grid-cols-3 gap-0 font-normal '>
                        <div className=''>
                            <img src="../../../Assets/favicon/company_logo.jpg" alt="company logo" />
                        </div>
                        <div>
                            <p>Diagonstics</p>
                        </div>
                        <div>
                            <p>Packeges</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3'>
                        <div>
                            <p><i class="fa-solid fa-location-dot"></i></p>
                            <p>Your Location <br />
                            Dhaka
                            </p>
                        </div>
                        <div className='flex justify-between items-center'>
                        <button class="btn btn-active btn-ghost hover:bg-gray-400">Login</button>
                        <button class="btn btn-info hover:bg-blue-400 text-white ">SignUp</button>
                                               
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Navbar;