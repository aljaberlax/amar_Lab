import React from 'react';
import Marquee from 'react-fast-marquee';
import marqe1 from '../../Assets/marquee/1.png';
import marqe2 from '../../Assets/marquee/2.png';
import marqe3 from '../../Assets/marquee/3.png';
import marqe4 from '../../Assets/marquee/4.png';

const Featured = () => {
    return (
        <div>
            <div className='flex  text-3xl font-bold'>
                <p className='mx-auto'>We Are Featured In</p>
            </div>
            <Marquee>
                <img src={marqe1} alt="" />
                <img src={marqe2} alt="" />
                <img src={marqe3} alt="" />
                <img src={marqe4} alt="" />
                
            </Marquee>
        </div>
    );
};

export default Featured;