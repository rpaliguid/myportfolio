// SquareComponent.js
import React from 'react';
import { Html } from '@react-three/drei'

const SocmedProject = ({ toggleDisplay }) => {
  return (
    <Html center>
      <div className="serviceBox">
        <a href='#' class="close" onClick={toggleDisplay}></a>
      </div>
    </Html>
  );
};

export default SocmedProject;
