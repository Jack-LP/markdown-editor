import React, { useState, useEffect } from 'react';
import { setToStorage, getFromStorage } from '../utils/localStorage';
import Navbar from './components/Navbar';
import TextSection from './components/TextSection';
import SideTray from './components/SideTray';

const App = () => {
  const [input, setInput] = useState(getFromStorage('localDoc', true) || '');
  const [docTitle, setDocTitle] = useState('untitled');
  const [trayOpen, setTrayOpen] = useState();

  useEffect(() => {
    fetch('../data/welcome.txt')
      .then((r) => r.text())
      .then((welcome) => {
        if (input === '') {
          setInput(welcome);
          console.log(welcome);
        }
      });
  }, []);

  useEffect(() => {
    setToStorage('localDoc', input);
  }, [input]);

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
        input={input}
        setInput={setInput}
        setDocTitle={setDocTitle}
      />
    </div>
  );
};

export default App;
