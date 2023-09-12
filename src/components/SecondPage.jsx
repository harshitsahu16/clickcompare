import React from 'react';
import logo from '../assets/section2.png'

function SecondPage() {
  return (
    <div className="ml-16 mr-18 grid mt-4 grid-cols-2" id="a1">
      <div className="ml-20">
        <p className="text-9xl mt-32 font-neue">
          find,<br />
          compare<br />
          & buy.
        </p>
      </div>
      <div className="mb-22">
        <img className="mt-56 rounded-sm" src={logo} alt="bye-picture" />
      </div>
    </div>
  );
}

export default SecondPage;
