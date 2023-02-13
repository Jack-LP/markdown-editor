import React, { useState } from 'react';
import DocumentContext from '../../context/DocumentContext';
import {
  List,
  ChevronDown,
  ChevronUp,
  FileEarmark,
} from 'react-bootstrap-icons';

const Navbar = ({ input, setTrayOpen, docTitle, setDocTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const saveDoc = (format) => {
    const link = document.createElement('a');
    const file = new Blob([input], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = `${docTitle}.${format}`;
    link.click();
    URL.revokeObjectURL(link.href);
    setMenuOpen(false);
  };

  return (
    <nav className='flex items-center justify-between gap-5 bg-charcoal-200 pr-5'>
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
      <div className='relative'>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className='bg-myOrange py-2 px-5 rounded-md flex gap-2 items-center'
        >
          {menuOpen ? <ChevronUp /> : <ChevronDown />}
          Save As...
        </button>
        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col gap-2 absolute top-12 bg-charcoal-100 w-full p-2 rounded-md`}
        >
          <button
            onClick={() => saveDoc('txt')}
            className='border-[1px] border-white rounded-md py-1 z-10'
          >
            .txt
          </button>
          <button
            onClick={() => saveDoc('md')}
            className='border-[1px] border-white rounded-md py-1 z-10'
          >
            .md
          </button>
          <div className='absolute w-4 h-4 bg-charcoal-100 rotate-45 top-[3px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
