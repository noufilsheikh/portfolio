import React from 'react';
import LogoNode from '../../assets/images/logo-node.png';
import './logo.scss';

const Logo = () => {
  return (
    <div className="logoAnimationContainer">
      <img src={LogoNode}  className='imgAnimation' alt="logo" />
      </div>
  );
};

export default Logo;
