import React, { useContext, useState } from 'react';
import DocumentContext from '../../context/DocumentContext';
import { List, Save, FileEarmark } from 'react-bootstrap-icons';

const Navbar = ({ input, trayOpen, setTrayOpen }) => {
  const [docTitle, setDocTitle] = useState('untitled-document');

  const saveDoc = () => {
    const link = document.createElement('a');
    const file = new Blob([input], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = `${docTitle}.md`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <nav className='flex items-center justify-between gap-5 bg-charcoal-200'>
      <div className='flex items-center gap-5'>
        <button
          onClick={() => setTrayOpen((prev) => !prev)}
          className='p-4 bg-charcoal-100'
        >
          <List size={32} />
        </button>
        <h1 className='uppercase font-semibold tracking-[4px] border-r-[1px] pr-5'>
          Markdown
        </h1>
        <div className='flex gap-2 items-center'>
          <FileEarmark />
          <div className='flex flex-col text-sm'>
            <p className='text-slate'>Document Name</p>
            <input
              type='text'
              className='bg-transparent outline-none -mt-1 text-white placeholder-white'
              placeholder={docTitle}
              onChange={(e) => setDocTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        onClick={saveDoc}
        className='bg-myOrange py-2 px-3 rounded-md flex gap-2 items-center mr-5'
      >
        <Save />
        Save
      </button>
    </nav>
  );
};

export default Navbar;
