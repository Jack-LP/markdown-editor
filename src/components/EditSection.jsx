import React from 'react';

const EditSection = ({ input, setInput }) => {
  return (
    <div className='flex flex-col w-screen md:w-[50vw]'>
      <h2 className='uppercase text-sm tracking-wider bg-charcoal-300 p-3 text-slate border-r-[1px] border-white/20'>
        Markdown
      </h2>
      <textarea
        onChange={(e) => setInput(e.target.value)}
        id='inputText'
        value={input}
        autoFocus
        spellCheck='false'
        wrap={'hard'}
        className='w-full h-[88vh] bg-charcoal-400 outline-none border-r-[1px] border-white/20 resize-none font-robotoMono px-10 py-4'
      ></textarea>
    </div>
  );
};

export default EditSection;
