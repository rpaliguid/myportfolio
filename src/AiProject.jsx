import React from 'react';
import { Html } from '@react-three/drei';

const AiProject = ({ toggleDisplay }) => {
  return (
    <Html center>
      <div className="serviceBox">
        <div className='player'>
        <video className='video-container' controls>
          <source src="./Ai.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <button className="close" onClick={toggleDisplay}></button>
      </div>
    </Html>
  );
};

export default AiProject;
