import React from 'react';
import {Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './index.css';



function Nav() {
 
  return (
    <>
    <div className='parent-div' >
    <div className='header' >
        <div className='nav' >
        <div className='logo' > LOGO. </div>
        <ul>
            <li>
                <Link to="/"  styles={{textDecoration :'none'}} ><p className='nav-p'>Home</p></Link>
            </li>

            <li>
                <Link to="/men" ><p className='nav-p' >Men</p></Link>
            </li>
             
            <li>
                <Link to="/women" ><p className='nav-p' >Women</p></Link>
            </li>
             
            <li>
                <Link to="/kids" ><p className='nav-p' >Kids</p></Link>
            </li>
             

             <li>
                <Link to="/ContactUs" ><p className='nav-p' >Contact Us</p></Link>

            </li>

        </ul>

        <div className='signUp'>

        <Link to="/Cart" ><p className='nav-p' ><ShoppingCartIcon/></p></Link>

        <button className='signUp-btn' >signUp</button>

        </div>

        </div>
        
    </div>
 </div>
    </>
  );
}

export default Nav;