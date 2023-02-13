import React from 'react';
import { List, Save } from 'react-bootstrap-icons';

const Navbar = ({ input, trayOpen, setTrayOpen }) => {
  const saveToLocal = () => {
    localStorage.setItem('document', input);
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
        <h1 className='uppercase font-semibold tracking-[4px]'>Markdown</h1>
      </div>
      <button
        onClick={saveToLocal}
        className='bg-myOrange py-2 px-3 rounded-md flex gap-2 items-center mr-5'
      >
        <Save />
        Save Changes
      </button>
    </nav>
  );
};

export default Navbar;
