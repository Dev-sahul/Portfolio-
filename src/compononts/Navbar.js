import React, { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa';

import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    const links = [
     {
        id:1,
        link:"home"
     },
     {
        id:2,
        link:"about"
     },
     {
        id:3,
        link:"experience"
     },
     {
        id:4,
        link:"contact"
     },
    ]

  return (
   <div className='bg-gradient-to-b  from-sky-950 to-slate-700 w-full flex justify-between items-center p-1 fixed z-20'>
    <h1 className='font-signature text-sky-50 text-6xl left-0 pl-2'>sahul</h1>
<ul className=' text-white items-center hidden md:flex '>
         {links.map(({id, link})=>(
    
 <li key={id} className='relative text-2xl mx-2 cursor-pointer w-fit block after:block  after:absolute after:h-[3px] after:bg-sky-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left '>
   <Link to={link} smooth duration={500} >
    {link}
   </Link>
    </li>
    
         ))}
      
      
    
</ul>
<div onClick={()=>setNav(!nav)} className='ring-0 text-white cursor-pointer pt-1 z-20 md:hidden '>
    {nav ? <FaTimes size={30} />: <FaBars size={30} />}
</div>
{nav &&(

    <ul className='  flex flex-col justify-center  items-center absolute h-screen w-full top-0 left-0  gap-4 bg-gradient-to-b from-black via-sky-950 to-slate-700 border-2 '>

    {links.map(({id,link})=>(
      

       <li key={id} className='text-emerald-50  text-2xl cursor-pointer capitalize   hover:text-sky-500  hover::scale-x-0 hover:scale-x-100 hover:transition hover:duration-300 hover:origin-bottom-right  '>
         
        <Link onClick={() => setNav(!nav)}
         to={link} smooth duration={500}>
         {link}
        </Link>
        </li>
      
        ))}
        </ul>

   ) }
   </div>
  ) 
}

export default Navbar