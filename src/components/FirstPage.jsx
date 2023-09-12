import React from 'react'
import gif from '../assets/vid 1.gif';

const FirstPage = () => {
  return (
    <>
    <div className="ml-16 mr-8 grid mt-11 lg:grid-cols-2 sm:grid-cols-1 gap-4 justify-around">
      <div className="ml-16">
        <div>
          <h1 className="mt-14 ml-16 font-bold text-xl" id="a1">
            CLICK COMPARE
          </h1>
        </div>

        <div className="ml-16 mt-32 text-8xl font-neue" id="a1">
          <p>Hide &</p>
          <p>Seek Time!</p>
        </div>

        <div className="text-4xl mt-16 ml-16">
          <p>And you're it!</p>
          <p>(Sorry, we can't find the page, too.)</p>
        </div>
      </div>
      <div className="flex flex-col ml-14">
        <div className="w-7/12 h-50">
          <img className="mt-12 ml-20 mb-14 font-bold" src={gif}alt="page not found" />
        </div>
        <div className="ml-20 mt-0">
          <button className="border px-12 py-4 ml-20 rounded-lg border-slate-100">COMING SOON ......</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default FirstPage
