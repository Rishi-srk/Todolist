import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink ,Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Active from './components/Active';
import All from './components/All';
import Completed from './components/Completed';
import { useState } from 'react';

function App() {
  
  let handleClick=()=>{

  }
  
   
   
 

  return (
    <div className="App ">
      <div className=''>
      <h1 className='mt-5 mb-5'>Task Board</h1>
      </div>
      <div className=' d-flex  justify-content-center row-cols-4'>
      <All  className='col-sm-4'/>
      <Active className='col-sm-4' />
      <Completed className='col-sm-4'/>
        
      </div>

     
      

    </div>
  );
}

export default App;
