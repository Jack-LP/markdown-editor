import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextSection from './components/TextSection';
import SideTray from './components/SideTray';

const App = () => {
  const [input, setInput] = useState();
  const [docTitle, setDocTitle] = useState('untitled-document');
  const [trayOpen, setTrayOpen] = useState();

  return (
    <div className='w-screen h-screen bg-charcoal-400 text-white font-commissioner caret-myOrange'>
      <Navbar
        input={input}
        trayOpen={trayOpen}
        setTrayOpen={setTrayOpen}
        docTitle={docTitle}
        setDocTitle={setDocTitle}
      />
      <TextSection input={input} setInput={setInput} />
      <SideTray
        trayOpen={trayOpen}
        setTrayOpen={setTrayOpen}
        setInput={setInput}
        setDocTitle={setDocTitle}
      />
    </div>
  );
};

export default App;
