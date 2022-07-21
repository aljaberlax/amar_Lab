import React from 'react';
import Banner from '../Pages/Banner/Banner';
import Navbar from '../shared/Navbar/Navbar';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section>
                <div className='bg-indigo-100 py-8 flex justify-center items-center '>
                    <div className='border-r-[1px] mr-20 px-16 border-r-slate-500'>
                        <p className='text-3xl'>
                            4 Years+
                        </p>
                        <p>Services</p>
                    </div>

                    <div className=''>
                        <p className='text-3xl'>
                            52297 +
                        </p>
                        <p>
                            Tests done
                        </p>
                    </div>
                </div>
            </section>
            <section className='lab_partners '>

                <div className=' flex justify-center mt-14'>
                    <p> <span className='text-3xl font-bold ml-28'>Our Lab Partners</span> <br />
                        <span className='text-lg font-normal'>Your tests will be done from our partner labs where quality</span>
                        <br /><span className='text-lg font-normal ml-36'> is uncompromised.</span></p>
                </div>
                <div >
                    <div className='lab_partners_img'>
                        <div className="hero rounded-2xl bg-slate-50">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/Smzx8Wz/ibnesina.png" alt='' className=" rounded-lg " />

                            </div>
                        </div>
                        <div className="hero rounded-2xl bg-slate-50 ">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/86JvN4p/drlab.jpg" alt='' className=" rounded-lg " />

                            </div>
                        </div>

                        <div className="hero rounded-2xl bg-slate-50">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/QprwrxZ/islamibank.png" alt='' className="max-w-sm rounded-lg " />

                            </div>
                        </div>
                        <div className="hero rounded-2xl bg-slate-50">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/mJ1r93r/onomosmonile.png" alt='' className="max-w-sm rounded-lg " />

                            </div>
                        </div>
                    </div>
                    <div className='lab_partner2 '>
                        <div className="hero rounded-2xl bg-slate-50">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/v1F04zd/popular.png" alt='' className="max-w-sm rounded-lg " />

                            </div>
                        </div>
                        <div className="hero rounded-2xl bg-slate-50">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/4fg9WRN/thyrocare.jpg" alt='' className="max-w-sm rounded-lg " />

                            </div>
                        </div>
                        <div className="hero rounded-2xl bg-slate-50 ">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/jzXsqGX/united.png" alt='' className="max-w-sm rounded-lg" />

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div className='font-bold font-serif text-3xl flex justify-center mt-16'>
                    <p>Why Book With Us?</p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 mt-8 justify-center items-center mx-24'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="https://i.ibb.co/QCYvCLG/1.png" className='rounded-3xl bg-slate-100 p-5' alt="" />
                        <p className='text-3xl mt-5'>Safe Home Sample </p>
                        <p className='text-3xl'> Collection</p>
                        <p className='mt-5 text-lg'>A certified professional <br /> will collect your sample <br /> from your location.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='rounded-3xl bg-slate-100 p-5' src="https://i.ibb.co/mXvRtp8/2.png" alt="" />
                        <p className='text-3xl mt-5'>Get Digital Report Within</p>
                        <p className='text-3xl'> A DAY</p>
                        <p className='mt-5 text-lg'>Our labs ensure turn- <br /> around-time of 24 hours <br /> from specimen pickup</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='rounded-3xl bg-slate-100 p-5' src="https://amarlab.com/static/media/tag.017a3400.svg" alt="" />
                        <p className='text-3xl mt-5'>Offers And Affordable</p>
                        <p className='text-3xl'>Price</p>
                        <p className='mt-5 text-lg'>Get great discounts  and <br /> offers on tests  and <br /> packages.
                        </p>
                    </div>
                </div>
            </section>
            <section className='Order_now'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 ml-28 mt-24  mr-28 gap-5'>
                    <div className='rounded-3xl bg-indigo-100'> 
                        <p className='text-3xl ml-10 mt-10 '>
                            Order Diagnostics Service <br /> From Top Labs
                        </p>
                        <p className='ml-10 mt-3 text-lg'>
                            Order Diagnostic Tests from Preferred Labs.
                        </p>
                        <button class="btn btn-info hover:bg-blue-400 text-white text-lg ml-10 mt-10 ">Order Now</button>
                    </div>
                    <div className='rounded-3xl  bg-slate-300'>
                        <p className='text-3xl ml-10 mt-10'>
                            Order Packages From Top <br /> Labs
                        </p>
                        <p className='ml-10 mt-3 text-lg' >Order Heavily Discounted packages.</p>
                        <button class="btn btn-info hover:bg-blue-400 text-white text-lg ml-10 mt-10 mb-10 ">Order Now</button>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Home;