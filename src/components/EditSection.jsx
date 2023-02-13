import React from 'react';

const EditSection = ({ input, setInput }) => {
  return (
    <div className='flex flex-col w-[50vw]'>
      <h2 className='uppercase tracking-wider bg-charcoal-300 p-3'>Markdown</h2>
      <textarea
        onChange={(e) => setInput(e.target.value)}
        value={input}
        wrap={'hard'}
        className='w-full h-[88vh] bg-charcoal-400 outline-none border-r-[1px] border-white/20 resize-none font-robotoMono'
      ></textarea>
    </div>
  );
};

export default EditSection;
