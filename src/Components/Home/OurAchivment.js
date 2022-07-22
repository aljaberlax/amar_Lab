import React from 'react';
import MultipleItems from './Slick';

const OurAchivment = () => {
    return (
        <div>
            <section className='Our_Achivment bg-slate-100 mt-24'>
                <div >
                    <div className='pt-5'>
                        <p className='text-3xl font-bold text-center'>Our Achievements</p>
                    </div>
                    <div class=" mt-5 carousel w-4/5 h-52  items-center mx-24 rounded-tl-3xl rounded-br-3xl">
                        <div id="slide6" className=" justify-center carousel-item relative w-full">
                            <img src='' alt="" />
                            <div className='w-5/6 '>
                                <p className='text-center'>
                                    Thanks to AmarLab for their excellent service. I have eye problems that don’t allow me to go out for a diagnostic test. The agent was very cooperative and polite to collect my sample. And, I did not feel pain at all.
                                </p>
                                <p className='text-center mt-5 text-2xl'>
                                Sumaya Samad
                               </p>
                                <p className='text-center'>
                                    30 Years
                                </p>
                            </div>
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide10" class="btn btn-circle">❮</a>
                                <a href="#slide7" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide7" class="carousel-item relative justify-center w-full">
                            <img src='' alt="" />
                            <div className='w-4/5'>
                                <p className='text-center'>
                                    Very professional service from AmarLab. The representative was really helpful to listen to our health problems and suggested us accordingly. I recommend them to everyone to try their service.
                                </p>
                                <p className='text-center mt-5 text-2xl'>
                                    Rehana Habib
                                </p>
                                <p className='text-center'>
                                    52 Years
                                </p>
                            </div>
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide6" class="btn btn-circle">❮</a>
                                <a href="#slide8" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide8" class="carousel-item relative justify-center w-full">
                            <img src='' alt="" />
                            <div className='w-4/5'>
                                <p className='text-center'>
                                    It was a great experience to receive the service of AmarLab. My healthcare need was rightly fulfilled by the Agent. I am very much impressed with AmarLab. Thank you AmarLab’s whole team for their amazing service.
                                </p>
                                <p className='text-center mt-5 text-2xl'>
                                    M. Ahmed
                                </p>
                                <p className='text-center'>
                                    67 Years
                                </p>
                            </div>
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide7" class="btn btn-circle">❮</a>
                                <a href="#slide9" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide9" class="carousel-item relative justify-center w-full">
                            <img src='' alt="" />
                            <div className='w-4/5'>
                                <p className='text-center'>
                                    Very much satisfied with the service of AmarLab. The agents reached my home on time. They were taking proper safety precautions before taking my sample. So I was fully relieved to avail their service. Great service indeed!


                                </p>
                                <p className='text-center mt-5 text-2xl'>
                                    Md. Jasim
                                </p>
                                <p className='text-center'>
                                    40 Years
                                </p>
                            </div>
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide8" class="btn btn-circle">❮</a>
                                <a href="#slide10" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide10" class="carousel-item  relative justify-center w-full">
                            <img src="" alt="" />
                            <div className='w-4/5'>
                                <p className='text-center'>
                                    AmarLab has taken a wonderful initiative to help the old sick patients at home. Their service is on a good track now. I wish them good luck so that they can go forward with this benevolent service for the people.


                                </p>
                                <p className='text-center mt-5 text-2xl'>
                                    Arif Mahmud
                                </p>
                                <p className='text-center'>
                                    32 Years
                                </p>
                            </div>
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide9" class="btn btn-circle">❮</a>
                                <a href="#slide6" class="btn btn-circle">❯</a>
                            </div>
                        </div>


                    </div>
                    <div>
                        <p className='text-3xl font-bold text-center'>
                            Trusted By Over 80+ Businesses
                        </p>


                    </div>
                    <div>
                        <MultipleItems></MultipleItems>
                    </div>


                </div>

            </section>
        </div>
    );
};

export default OurAchivment;