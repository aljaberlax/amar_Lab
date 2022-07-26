import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.css'
import { HiLocationMarker } from "react-icons/hi";
const Navbar = () => {
   
    return (
        <div>
            
            <div className='bg-indigo-100 '>
                <h4 className='ml-28 p-3'>Call For Order: <span className=' text-lg font-bold'>09643445566</span> </h4>
            </div>
            <div className='p-5'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 ml-32 items-center'>
                    <div className='grid grid-cols-3 text-3xl font-normal '>
                        <div className=''>
                            <img width="50" height="40" src="https://i.ibb.co/KhSgNFy/company-logo.png" alt="company logo" />
                        </div>
                        <div>
                            <p>Diagonstics</p>
                        </div>
                        <div>
                            <p>Packeges</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3'>
                        <div className='flex gap-3 items-center justify-start'>
                            <p className='text-2xl'><HiLocationMarker></HiLocationMarker></p>
                           <div>
                           <p className='text-xl'>Your Location <br />
                                <span className='text-sm '>Dhaka</span>
                            </p>
                           </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <button class="btn btn-active btn-ghost hover:bg-gray-400 ">Login</button>
                            <button class="btn btn-info hover:bg-blue-400 text-white ">SignUp</button>

                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Navbar;