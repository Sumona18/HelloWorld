import React from 'react';
import Video from './video.mp4';

function Flexing(){
    return(
        <div style={{padding: '5%'}}>
        <center>
        <h1 style={{color: 'white'}}>Vivek as a Flexboi</h1>
        <h4 style={{color: 'white'}}>play this!</h4>
            <video src={Video} width="280 %" height="80%" controls="controls" autoplay="false" />
            </center>
        </div>
    );
}
export default Flexing;