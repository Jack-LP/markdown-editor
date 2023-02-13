import React, { useState } from 'react';
import EditSection from './EditSection';
import PreviewSection from './PreviewSection';

const TextSection = () => {
  const [input, setInput] = useState();

  return (
    <div className='w-full flex'>
      <EditSection setInput={setInput} input={input} />
      <PreviewSection setInput={setInput} input={input} />
    </div>
  );
};

export default TextSection;
