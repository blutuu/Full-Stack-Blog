import React from 'react';
import { useEffect } from 'react';
import { BlueIIPath } from './Constants';
import { anime } from 'react-anime';

const BlueSignature = ({ customWidth, customHeight }) => {
  const width = customWidth ? customWidth : "200";
  const height = customHeight ? customHeight : "100";

  const animation = () => {
    anime({
      targets: '#signature path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      direction: 'normal',
      duration: 3000,
      delay: 1000
    });
    anime({
      targets: '#signature',
      translateY: 0,
      opacity: 1,
      easing: 'easeOutBack',
      duration: 1000,
      delay: 1000
    });
  }

  useEffect(() => {
    animation();
  }, []);

  return (
    <svg className='o-0' id='signature' width={width} height={height} 
      viewBox='0 0 1278 658' preserveAspectRatio="" 
      style={{transform: 'translateY(-1rem)'}}>
      <path stroke="black" strokeWidth="15" fill="none" d={BlueIIPath}></path>
    </svg>
  );
};

export default BlueSignature;
