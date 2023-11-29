import React from 'react';
import {Link } from 'react-router';
import Home from './Home';
import Services from './Services';
import Products from './Products';
import './index.css';



function App() {
 
 
  return (
    <>
    <div className='parent-div' >
        <div className='nav' >
            <Link to="/" > Home</Link>
        </div>
    </div>
      
    </>
  );
}

export default App;