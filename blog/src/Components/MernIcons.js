import React from 'react';
import styled from 'styled-components';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';

const IconContainer = styled.div`
  > svg { 
    margin: 0.9rem;
  }
`;

const MernIcons = () => {
  return (
    <div id="mern-stack">
      <IconContainer id="icon-container">
        <IconContext.Provider value={{
          size: "2rem"
        }}>
          <SiMongodb/>
          <SiExpress/>
          <FaReact/>
          <FaNodeJs/>
        </IconContext.Provider>
      </IconContainer>
    </div>
  )
}

export default MernIcons;
