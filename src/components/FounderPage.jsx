import React from 'react';
import img1 from '../assets/image 1.jpg';
import img2 from '../assets/image 2.jpg';

function Founders() {
  return (
    <div className="mt-20 mb-10">
      <h1 className="text-7xl text-center font-neue">Meet Our Founders</h1>
      <h1 className='"text-7xl text-center font-neue"'>________________________________________________________________________________________________</h1>
      <div className="mt-32 grid grid-cols-2 gap-8 justify-center">
        <div className="text-center">
          <img
            className="rounded-full w-1/2 hover:rotate-45 mx-auto"
            src={img1}
            alt="DEEPJIT GANGULY"
          />
          <p className="mt-8 font-bold text-xl">DEEPJIT GANGULY</p>
        </div>
        <div className="text-center">
          <img
            className="rounded-full w-1/2 hover:rotate-45 mx-auto"
            src={img2}
            alt="AMAN PATHAK"
          />
          <p className="mt-8 font-bold text-xl">AMAN PATHAK</p>
        </div>
      </div>
    </div>
  );
}

export default Founders;
