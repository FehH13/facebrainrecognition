import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import LogoImage from './large.png'

const Logo = () => {
    return (
        <div className="ma4 mt0">
             <Tilt style={{ height: '150px', width:'150px'}}>
                <div className="br2 shadow-2">
                    <img  src={LogoImage} alt='logo'></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;