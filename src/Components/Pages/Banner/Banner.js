import React from 'react';

const Banner = () => {
    return (
        <div className='container mt-8'>
            <div className=' grid sm:grid-cols-1 md:grid-cols-2'>
                <div>
                    <h1 className='text-5xl font-bold ml-32 mt-8'>Diagnostics <br />
                        At Your Doorstep
                    </h1>
                    <p className='text-lg mt-5 ml-32'>
                        Making Healthcare Easily Accessible to Everyone, Everywhere.
                    </p>
                    <div>
                    <div>
                        <p>
                            <span>step:01</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>step:01</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>step:01</span>
                        </p>
                    </div>
                </div>
                </div>
                
                <div>
                    <h1>second half</h1>
                </div>

            </div>
        </div>
    );
};

export default Banner;