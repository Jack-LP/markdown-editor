import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextSection from './components/TextSection';
import SideTray from './components/SideTray';

const App = () => {
  const [input, setInput] = useState();
  const [trayOpen, setTrayOpen] = useState();
  const [docList, setDocList] = useState([]);

  return (
    <div className='w-screen h-screen bg-charcoal-400 text-white font-commissioner'>
      <Navbar input={input} trayOpen={trayOpen} setTrayOpen={setTrayOpen} />
      <TextSection input={input} setInput={setInput} />
      <SideTray
        trayOpen={trayOpen}
        setTrayOpen={setTrayOpen}
        docList={docList}
        setDocList={setDocList}
      />
    </div>
  );
};

export default App;
