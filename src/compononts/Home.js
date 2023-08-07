import React from 'react'
import sahul from '../assets/sahul.png'
import {MdKeyboardArrowRight }from 'react-icons/md'


function Home() {
  return (
    <div
    name="home"
    className="h-full w-full    px-[4rem] py-[5rem]">
    <div className=" mx-auto flex  flex-wrap-reverse items-center justify-around h-full px-4 ">
      <div className="flex flex-col justify-center     h-full  ">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          I'm a Front-end Developer
        </h2>
        <p className="text-gray-300 py-4 max-w-md">
          I have 8 years of experience building and desgining software.
          Currently, I love to work on web application using technologies like
          React, Tailwind, Next JS and GraphQL.
        </p>

        <div>
          <button
            to="portfolio"
            
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-blue-500 cursor-pointer"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </button>
        </div>
      </div>

    <figure className='card w-[25rem] m-[4rem]   '>
        <div className="circle"></div>
        <div className="circle"></div>
        <img
          src={sahul}
          alt="my profile"
          className=" mx-auto w-full md:w-full card-inner"
        />
      </figure>
    </div>
    
  </div>
  )
}

export default Home