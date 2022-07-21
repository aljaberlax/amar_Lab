import React from 'react';
import Banner from '../Pages/Banner/Banner';
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
                        <div className="hero ">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/Smzx8Wz/ibnesina.png" alt='' className=" rounded-lg " />

                            </div>
                        </div>
                        <div className="hero  ">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/86JvN4p/drlab.jpg" alt='' className=" rounded-lg " />

                            </div>
                        </div>

                        <div className="hero ">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/QprwrxZ/islamibank.png" alt='' className="max-w-sm rounded-lg " />

                            </div>
                        </div>
                        <div className="hero ">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/mJ1r93r/onomosmonile.png" alt='' className="max-w-sm rounded-lg " />

                            </div>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3'>
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/v1F04zd/popular.png" alt='' className="max-w-sm rounded-lg " />

                            </div>
                        </div>
                        <div className="hero ">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/4fg9WRN/thyrocare.jpg" alt='' className="max-w-sm rounded-lg " />

                            </div>
                        </div>
                        <div className="hero  ">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/jzXsqGX/united.png" alt='' className="max-w-sm rounded-lg" />

                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Home;