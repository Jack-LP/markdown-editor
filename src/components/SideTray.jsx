import React, { useState } from 'react';
import { PlusCircle, Upload, ExclamationCircle } from 'react-bootstrap-icons';

const SideTray = ({ trayOpen, setTrayOpen, input, setInput, setDocTitle }) => {
  const [showModal, setShowModal] = useState(false);

  const newDoc = () => {
    setTrayOpen(false);
    if (input.length > 0) {
      setShowModal(true);
    } else {
      setInput('');
      setDocTitle('untitled-document');
      setTrayOpen((prev) => !prev);
    }
  };

  const forceNewDoc = () => {
    setShowModal(false);
    setInput('');
    setDocTitle('untitled-document');
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setInput(reader.result);
      setDocTitle(file.name.replace(/\.[^/.]+$/, ''));
      setTrayOpen((prev) => !prev);
    };
    reader.onerror = () => {
      console.log('error');
    };
  };

  return (
    <>
      <div
        className={`${
          showModal ? 'flex' : 'hidden'
        } absolute inset-0 backdrop-blur-md z-20`}
      ></div>
      <div
        className={`${
          showModal ? 'flex' : 'hidden'
        } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col bg-charcoal-100 p-6 rounded-lg gap-6 w-[400px] shadow-xl z-30 max-w-[90%]`}
      >
        <h2 className='font-semibold text-myOrange flex items-center gap-2'>
          {' '}
          <ExclamationCircle size={18} /> Warning
        </h2>
        <p>
          You have unsaved changes, creating a new file will reset the current
          document.
        </p>
        <div className='flex justify-between gap-4'>
          <button
            onClick={forceNewDoc}
            className='bg-myOrange p-2 w-full rounded-md'
          >
            Continue
          </button>
          <button
            onClick={() => setShowModal(false)}
            className='bg-myOrange p-2 w-full rounded-md'
          >
            Cancel
          </button>
        </div>
      </div>
      <div
        onClick={() => setTrayOpen((prev) => !prev)}
        className={`${trayOpen ? 'flex' : 'hidden'} absolute inset-0`}
      ></div>
      <div
        className={`fixed shadow-md -translate-x-[100%] top-0 left-0 bg-transparent backdrop-blur-xl flex flex-col items-center justify-between duration-300 ease-out w-[280px] h-screen px-5 py-10 ${
          trayOpen ? 'translate-x-0' : null
        }`}
        onClick={(e) => e.stopPropagation}
      >
        <div className='w-full flex flex-col gap-5 items-center'>
          <h1 className='uppercase text-slate font-semibold font-roboto tracking-wider'>
            My Documents
          </h1>
          <button
            onClick={newDoc}
            className='bg-myOrange text-white py-2 rounded-md w-full flex items-center justify-center gap-2'
          >
            <PlusCircle size={20} /> New File
          </button>
          <input
            onChange={(e) => uploadFile(e)}
            type='file'
            id='fileUpload'
            accept='.md, .txt'
            className='hidden'
          />
          <label
            htmlFor='fileUpload'
            className='bg-myOrange text-white py-2 rounded-md cursor-pointer flex gap-2 items-center justify-center w-full'
          >
            <Upload size={20} /> Upload File
          </label>
        </div>

        <div className='flex flex-col gap-1 items-center'>
          <a
            className='text-myOrange text-sm'
            href='https://www.markdownguide.org/cheat-sheet/'
            target='_blank'
          >
            Markdown cheatsheet
          </a>
          <p className='font-robotoMono text-sm text-slate'>
            <a href='https://github.com/Jack-LP'>@Jack-LP</a> //{' '}
            <a href='https://github.com/Jack-LP/markdown-editor'>Source</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SideTray;
