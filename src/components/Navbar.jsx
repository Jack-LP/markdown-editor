import React from 'react';
import { List } from 'react-bootstrap-icons';

const Navbar = () => {
  return (
    <div className='flex items-center gap-5 bg-charcoal-200'>
      <button className='p-4 bg-charcoal-100'>
        <List size={32} />
      </button>
      <h1 className='uppercase font-semibold tracking-[4px]'>Markdown</h1>
    </div>
  );
};

export default Navbar;
