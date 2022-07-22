import React from 'react';
import Slick from '../../Home/Slick';

const Banner = () => {
    return (
        <div className='bg-slate-100 pb-20 '>
            <div className='grid sm:grid-cols-1 md:grid-cols-2'>
                <div>
                    <p className='text-5xl font-bold ml-32 mt-8'>Diagnostics
                    </p>
                    <p className='text-5xl font-bold ml-32 mt-3'>
                        At Your Doorstep
                    </p>
                    <p className='text-lg mt-5 ml-32 font-light'>
                        Making Healthcare Easily Accessible to Everyone, Everywhere.
                    </p>
                    <div className='grid grid-cols-2 ml-32 mt-8 gap-4'>
                        <div>
                            <p>
                                <span className='font-semibold text-lg'>Step 01: </span> Order tests <br />
                                Book tests & checkups
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className='font-semibold text-lg'>Step 02: </span> Provide Sample <br />
                                From your doorstep
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className='font-semibold text-lg'>Step 03:
                                </span> Get Report <br />
                                Your report delivered
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 ml-32 mr-10 gap-8 mt-8'>
                        <button class="btn btn-info hover:bg-blue-400 text-white text-lg ">Order Test</button>
                        <button class="btn btn-active btn-ghost hover:bg-gray-400 text-lg">Call To Order</button>

                    </div>
                </div>

                <div>
                    <div class=" mt-8 carousel w-4/5 h-fit rounded-tl-3xl rounded-br-3xl">
                        <div id="slide1" class="carousel-item relative w-full">
                            <img src="https://i.ibb.co/stW8b2Y/hero-caro-4-4e2095ae.jpg" alt='carosel1' class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" class="btn btn-circle">❮</a>
                                <a href="#slide2" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" class="carousel-item relative w-full">
                            <img src="https://i.ibb.co/3RJqjv2/hero-caro-5-6c693bbe.jpg" alt='carosel2' class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" class="btn btn-circle">❮</a>
                                <a href="#slide3" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" class="carousel-item relative w-full">
                            <img src="https://i.ibb.co/R2jRZF2/hero-caro-6-9f11877f.jpg" alt='carosel3' class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" class="btn btn-circle">❮</a>
                                <a href="#slide4" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" class="carousel-item relative w-full">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Gv4zcpaTTvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" class="btn btn-circle">❮</a>
                                <a href="#slide1" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;