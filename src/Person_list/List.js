import React from 'react';
// import Img from './wall 2.jpg';

function List({ img, name, job, info }) {
  return (
    <>
      <div className='box-border w-96  bg-slate-200 grid p-6 rounded-lg mx-auto my-10 hover:drop-shadow-lg'>
        <div className='flex justify-center'>
          <img
            className='h-32 w-32 rounded-full border-4 border-sky-800 '
            src={img}
            alt='image'
          />
        </div>

        <div className='flex justify-center'>
          <h1 className=' text-sky-800 font-semibold'>{name}</h1>
        </div>

        <div className='flex justify-center'>
          <h3 className=' text-lg text-sky-800 font-bold'>{job}</h3>
        </div>
        <div>
          <h5 className='text-center'>{info}</h5>
        </div>
      </div>
    </>
  );
}

export default List;
