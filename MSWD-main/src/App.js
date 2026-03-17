import './App.css'; 
import Navbar from './components/Navbar';  
import { Route } from 'react-router-dom'; 
import { Routes } from 'react-router-dom'; 
import Login from './components/Login'; 
import Domestic_Tourism  from './components/Domestic_Tourism ';
import Foriegn from './components/Foriegn';
import Aboutus from './components/Aboutus';
import Crud from './components/Crud';
import Des from './components/Des';
import Des1 from './components/Des1';
import Des2 from './components/Des2';
import Des3 from './components/Des3';
import Des4 from './components/Des4';
import Des5 from './components/Des5';
import Des6 from './components/Des6';
import Des7 from './components/Des7';
import Des8 from './components/Des8';
import Des9 from './components/Des9';
import Dis1 from './components/Dis1';
import Dis2 from './components/Dis2';
import Dis3 from './components/Dis3';
import Dis4 from './components/Dis4';
import Dis5 from './components/Dis5';
import Dis6 from './components/Dis6';
import Dis7 from './components/Dis7';
import Dis8 from './components/Dis8';
import Dis9 from './components/Dis9';
import Dis10 from './components/Dis10';
import Payment from './components/Payment';
import Pay from './components/Pay';





function App() { 
  
  return ( 
    <div className="App"> 
   <Navbar/>
    <Routes>  
           <Route path='Login' element={<Login/>}/>
           <Route path='Domestic_Tourism' element={<Domestic_Tourism />}/>     
           <Route path='International_Tourism' element={<Foriegn />}/> 
           <Route path='About_us' element={<Aboutus />}/> 
           <Route path='Crud' element={<Crud />}/> 
           <Route path="Des" element={<Des/>}/>
           <Route path="Des1" element={<Des1/>}/>
           <Route path="Des2" element={<Des2/>}/>
           <Route path="Des3" element={<Des3/>}/>
           <Route path="Des4" element={<Des4/>}/>
           <Route path="Des5" element={<Des5/>}/>
           <Route path="Des6" element={<Des6/>}/>
           <Route path="Des7" element={<Des7/>}/>
           <Route path="Des8" element={<Des8/>}/>
           <Route path="Des9" element={<Des9/>}/>
           <Route path="Dis1" element={<Dis1/>}/>
           <Route path="Dis2" element={<Dis2/>}/>
           <Route path="Dis3" element={<Dis3/>}/>
           <Route path="Dis4" element={<Dis4/>}/>
           <Route path="Dis5" element={<Dis5/>}/>
           <Route path="Dis6" element={<Dis6/>}/>
           <Route path="Dis7" element={<Dis7/>}/>
           <Route path="Dis8" element={<Dis8/>}/>
           <Route path="Dis9" element={<Dis9/>}/>
           <Route path="Dis10" element={<Dis10/>}/>
           <Route path="Payment" element={<Payment/>}/>
           <Route path="Pay" element={<Pay/>}/>
           
           
    </Routes>  

    
 
    </div> 
  ); 
} ;
 
export default App