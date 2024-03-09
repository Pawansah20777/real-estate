import React from 'react';

//import routes and route
import{Routes,Route} from 'react-router-dom';

//import components
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';  
import SignUp from './components/SignUp'; 
import HouseList from './components/HouseList';  
import About from './components/About';  
import Property from './components/Property';
import AdminProperty from './components/Admin_User';  
import FeedbackForm from './components/Feedback';
import Private from './components/Private';
import Dashboard from './components/Dashboard';
import S from './components/S';





//import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';


const App = () => {
  return (
  <div className='max-w-[1440px] mx-auto bg-white'>
   <Header/>
   <Routes>
    <Route element={<Private/>}>
   <Route path='/property/:id' element={<PropertyDetails/>}/>
   <Route path='/HouseList' element={<HouseList />} /> 
   <Route path='/Property' element={<Property />} /> 
   <Route path='/contact' element={<Footer />} /> 
   <Route path='/Dashboard' element={<Dashboard />} />
   <Route path='/S' element={<S />} />   
   
   </Route>
   <Route path='/' element={<Home/>}/>
   <Route path='/Home' element={<Home />} /> 
   <Route path='/About' element={<About />} /> 
   <Route path='/AdminProperty' element={<AdminProperty />} />
   <Route path='/AdminProperty' element={<AdminProperty />} />
   <Route path='/FeedbackForm' element={<FeedbackForm />} />
   <Route path='/SignIn' element={<SignIn />} /> 
   <Route path='/signUp' element={<SignUp />} />
 
 
   
  
   
   </Routes>
   <Footer/> 
    </div>
  );
};

export default App;
