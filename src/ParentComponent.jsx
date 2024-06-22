import React, { useState } from 'react';
import AiProject from './AiProject';

const ParentComponent = () => {
  const [isAiProjectVisible, setIsAiProjectVisible] = useState(false);

  const triggerAiProject = () => {
    setIsAiProjectVisible(true);
  };

  return (
    <div>
      <button onClick={triggerAiProject}>Trigger AI Project</button>
      {isAiProjectVisible && <AiProject />}
    </div>
  );
};

export default ParentComponent;
