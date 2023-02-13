import React from 'react';
import Navbar from './components/Navbar';
import TextSection from './components/TextSection';

const App = () => {
  return (
    <div className='w-screen h-screen bg-charcoal-400 text-white font-commissioner'>
      <Navbar />
      <TextSection />
    </div>
  );
};

export default App;
