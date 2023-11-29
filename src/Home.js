import React from 'react';
import Nav from './Nav';
import Hero from './hero/Hero';

import './index.css';
import Popular from './Popular/Popular';
import Newsletter from './Newsletter/Newsletter';
import Footer from './Footer/Footer';


function Home() {
  return (
    <>
<Nav/>
<Hero/>
<Popular/>
<Newsletter/>
<Footer/>
   </> 
  );
}

export default Home;