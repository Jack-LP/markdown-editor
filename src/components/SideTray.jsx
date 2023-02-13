import React from 'react';
import { X, PlusCircle, Upload } from 'react-bootstrap-icons';

const SideTray = ({ trayOpen, setTrayOpen, setInput, setDocTitle }) => {
  const newDoc = () => {
    setInput('');
    setDocTitle('untitled-document');
    setTrayOpen((prev) => !prev);
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
    <div
      className={`fixed z-10 shadow-md -translate-x-[100%] top-0 left-0 bg-transparent backdrop-blur-xl flex flex-col gap-5 items-center duration-300 ease-out w-[280px] h-screen p-5 pt-14 ${
        trayOpen ? 'translate-x-0' : null
      }`}
    >
      <button
        onClick={() => setTrayOpen((prev) => !prev)}
        className='absolute top-2 left-2'
      >
        <X size={30} />
      </button>
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
  );
};

export default SideTray;
