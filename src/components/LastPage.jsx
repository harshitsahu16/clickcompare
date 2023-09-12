import React from 'react';
import img1 from '../assets/facebook.png'
import img2 from '../assets/insta.png'
import img3 from '../assets/twitter (2) (1).png'
import vid from '../assets/vid 2.gif';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

function LastPage() {
  return (
    <div className="ml-16 mr-8 grid lg:grid-cols-2 sm:grid-cols-1 gap-4 justify-around">
      <div>
        <div className="mt-40">
          <h1 className="ml-16 font-bold text-5xl">ClickCompare</h1>
        </div>

        <div className="mt-32 ml-16 text-5xl">
          <p className="font-neue">Compare with us</p>
        </div>

        <div className="text-2xl mt-3 ml-16">
          <p>Click Compare is your ultimate destination </p>
          <p>for hassle-free tech product comparisons.</p>
          <button className="mt-14 bg-white text-black font-bold border px-10 py-4  border-slate-400 text-2xl">
            COMPARE NOW
          </button>
          <div className="flex ml-4 pr-4 mt-8">
            <p className="flex flex-row mr-4 text-xl mt-20 font-bold" id="a1">
              GET SOCIAL
              <div className='flex flex-row gap-3 ml-5'>
                 <FaFacebookF size={30} />
                 <FaTwitter size={30} />
                 <FaInstagram size={30} />
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <img className="w-2/3 h-5/6 mt-16 ml-48 font-bold" src={vid} alt="page not found" />
      </div>
    </div>
  );
}

export default LastPage;
