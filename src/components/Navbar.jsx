import React, { useState } from 'react';
import {
  List,
  ChevronDown,
  ChevronUp,
  FileEarmark,
  Save,
} from 'react-bootstrap-icons';

const Navbar = ({ input, setTrayOpen, docTitle, setDocTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const saveDoc = (format) => {
    if (docTitle.length === 0) {
      return;
    }
    const link = document.createElement('a');
    const file = new Blob([input], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = `${docTitle}.${format}`;
    link.click();
    URL.revokeObjectURL(link.href);
    setMenuOpen(false);
  };

  return (
    <>
      <div
        onClick={() => setMenuOpen((prev) => !prev)}
        className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-0 z-20`}
      ></div>
      <nav className='flex items-center justify-between gap-5 bg-charcoal-200 pr-2 md:pr-5'>
        <div className='flex items-center gap-5'>
          <button
            onClick={() => setTrayOpen((prev) => !prev)}
            className='p-4 bg-charcoal-100'
          >
            <List size={32} />
          </button>
          <h1 className='uppercase font-semibold tracking-[4px] border-r-[1px] pr-5 hidden md:block'>
            Markdown
          </h1>
          <div className='flex gap-2 items-center'>
            <FileEarmark />
            <div className='flex flex-col text-sm'>
              <p className='text-slate'>Document Name</p>
              <input
                type='text'
                className='bg-transparent outline-none -mt-1 text-white placeholder-white focus:border-b-[1px]'
                value={docTitle}
                onChange={(e) => setDocTitle(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='md:hidden'>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className='bg-myOrange p-2 rounded-md flex gap-2 items-center'
            >
              <Save size={23} />
            </button>
          </div>
          <div className='hidden md:block'>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className='bg-myOrange py-2 px-5 rounded-md flex gap-2 items-center'
            >
              {menuOpen ? <ChevronUp /> : <ChevronDown />}
              Save As...
            </button>
          </div>
          <div
            onClick={(e) => e.stopPropagation}
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } flex-col gap-2 absolute top-12 right-0 bg-charcoal-100 w-32 md:w-full p-2 rounded-md z-30`}
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
            <div className='absolute w-4 h-4 bg-charcoal-100 rotate-45 top-[3px] right-1 md:right-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
