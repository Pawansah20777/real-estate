import React from "react";
import HouseList from './HouseList';  
import Search from './Search';
import S from './S';

const Property = () => {
 
  return (
    <div className="flex h-screen mb-0">
      <nav><S/></nav>

      <div className="flex-1 overflow-y-auto ">
        <Search/>
          <HouseList/>
        </div>
    </div>
  );
};



export default Property;
