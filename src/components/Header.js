import React from 'react';
import img1 from './images/img1.jpg';

function Header(){

    
    return(
        <div >
        <center><br />
        <span style={{color: 'rgb(230, 234, 238)'}}>Hello <span className='strike'>World</span> Bihar</span>
        <p className='intro0'>Happy Lockdown Day!</p>
     <p className='intro1'>bc</p>
      <p className='intro2'>that's what you said...</p>
        <div className='section2'>
            <img className='headimg' src={img1} alt='network kharaab hai' />
            </div>
            </center>
        </div>
    );
}
export default Header;