import React from 'react';
import artical1 from '../../Assets/Top articals/top artical 1.jpeg'
import artical2 from '../../Assets/Top articals/Prostate_Cancer13965.png'
const TopArticals = () => {
    return (
        <div className='flex mt-24'>
            <div className='ml-24 flex flex-col justify-start w-2/5'>
                <p className='text-3xl font-bold '>Read Top Articles</p>
                <p className='text-lg pt-5'>Read our thoughts on healthcare, our
                </p>
                <p className='text-lg'>news and updates from Amarlab family.</p>
                <button class="btn w-1/3   btn-info ml-10 mt-10 text-white">See All Articales</button>
            </div>
            <div className='w-2/3 grid sm:grid-cols-1 md:grid-cols-2 gap-2 justify-center'>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={artical1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Health Camp at i-Farmer
                            
                        </h2>
                        <p>Tech</p>
                       <p>Writen By, amarlab Blog</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src={artical2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                           What are the Causes and Risk Factors of Prostate Cancer
                            
                        </h2>
                        <p>Health</p>
                        <p>Writen By, amarlab Blog</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopArticals;