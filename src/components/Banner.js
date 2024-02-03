import React from 'react';

//import image
import Image from '../assets/img/house-banner.png';

//import components
import Search from '../components/Search';

const Banner = () => {
  return (
  <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
   <div className='flex flex-col lg:flex-row'>
    <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center
    lg:text-left justify-center flex-1 px-4 lg:px-0'>
      <h1 className='text-4x1 lg:text-[58px] font-semibold lending-none mb-6'> 
        <span className='text-violet-700'>Rent</span> Your Dreams House With Us.
        </h1>
        <p className='max-w-[480px] mb-8'> 
        Discover unparalleled luxury and comfort as you rent your dream house with us. 
        Nestled in the heart of [City/Area], our exclusive properties redefine sophistication, 
        offering a harmonious blend of modern elegance and timeless charm. Each residence is meticulously designed to cater to your every need, 
        featuring spacious interiors, state-of-the-art amenities, and breathtaking views
        </p>
    </div>
    {/* image */}
    <div className='hidden flex-1 lg:flex justify-end items-end'>
      <img src={Image} alt="" />
    </div>
   </div>
   <Search/>
    </section>
    );
};

export default Banner;
