import React from 'react';

//import components
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';
import About from '../components/About';

const Home = () => {
  return(
   <div className='min-h-[1800px'>
    <Banner/>
    <HouseList/>
    <About/>
    </div>
  );
};

export default Home;
