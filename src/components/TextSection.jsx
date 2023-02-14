import React, { useState } from 'react';
import EditSection from './EditSection';
import PreviewSection from './PreviewSection';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

const TextSection = ({ input, setInput }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className='w-full flex relative overflow-hidden'>
      <button
        onClick={() => setShowPreview((prev) => !prev)}
        className='z-20 absolute top-[10px] right-[10px] md:hidden'
      >
        {showPreview ? <EyeSlash size={22} /> : <Eye size={22} />}
      </button>
      <div className={`${showPreview ? 'hidden' : 'block'} md:block`}>
        <EditSection setInput={setInput} input={input} />
      </div>
      <div className={`${showPreview ? 'block' : 'hidden'} md:block`}>
        <PreviewSection input={input} />
      </div>
    </div>
  );
};

export default TextSection;
