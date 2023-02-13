import React, { useContext } from 'react';
import { X } from 'react-bootstrap-icons';
import DocumentContext from '../../context/DocumentContext';

const SideTray = ({ trayOpen, setTrayOpen }) => {
  const { docList, setDocList } = useContext(DocumentContext);

  return (
    <div
      className={`fixed z-10 shadow-md -translate-x-[100%] top-0 left-0 bg-charcoal-300/50 backdrop-blur-xl flex flex-col gap-5 duration-300 ease-out w-[280px] h-screen p-5 pt-14 ${
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
      <button className='bg-myOrange text-white py-3 rounded-md'>
        + New Document
      </button>
      {docList.length !== 0 ? (
        <div className='flex flex-col'>
          {docList.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SideTray;
