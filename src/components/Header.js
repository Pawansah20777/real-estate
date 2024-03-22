import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link ,useNavigate} from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  const userAuth = localStorage.getItem("users");
  const adminAuth = localStorage.getItem("admins");
  const navigate = useNavigate();

  const user = () => {
    if (userAuth) {
      navigate('/Property');
      console.log(userAuth);
    } else {
      navigate('/AdminProperty');
    } 
  };

  const getUserName = () => {
    if (userAuth) {
      const userData = JSON.parse(userAuth);
      return userData ? userData.name : 'User';
    } else if (adminAuth) {
      const adminData = JSON.parse(adminAuth);
      return adminData ? adminData.name : 'Admin';
    }
    return 'Guest';
  };

  return (
    <header className='py-6 mb-1  border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        {/* buttons*/}
        <div className='flex items-center gap-6'>
          {/* Link to the SignIn page */}
          <Link className='hover:text-voilet-900 transition' to='/Home'> Home </Link>
          <Link className=' text-black px-4 py-3 rounded-lg  transition' to='/HouseList' >Property</Link>
          <Link className='hover:text-voilet-900 transition' to='/About'>About</Link>
          <Link className=' text-black px-4 py-3 rounded-lg  transition' to='/Footer'>Contact</Link>

          {userAuth || adminAuth ?
            <Link className='hover:text-violet-900 transition flex items-center' to={userAuth ? "/Property" : "/AdminProperty"} onClick={user}>
              <FaUser className="mr-1" /> {getUserName()}
            </Link>
            : 
            <>
              <Link className='hover:text-voilet-900 transition' to='/SignIn'>Sign in</Link>
              <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg  transition' to='/signUp'>Sign up</Link>
            </>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
