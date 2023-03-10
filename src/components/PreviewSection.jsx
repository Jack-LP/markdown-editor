import React from 'react';
import ReactMarkdown from 'react-markdown';

const PreviewSection = ({ input }) => {
  return (
    <div className='flex flex-col w-screen md:w-[50vw]'>
      <h2 className='uppercase text-sm tracking-wider bg-charcoal-300 p-3 text-slate'>
        Preview
      </h2>
      <ReactMarkdown
        children={input}
        className='unreset break-words h-[88vh] overflow-y-scroll font-robotoSlab px-10 py-4'
      />
    </div>
  );
};

export default PreviewSection;
