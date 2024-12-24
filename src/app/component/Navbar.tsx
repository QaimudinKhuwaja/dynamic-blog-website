import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   <>
   <div className='bg-blue-950 max-w-screen-full py-3 flex justify-around shadow-lg shadow-black '>
  <div><h1 className='text-white font-[700] lg:text-[22px] md:text-[22px] text-[19px] pt-1'>QAFIX</h1></div>
  <div>
    <ul className='text-white lg:font-[400] font-[300] lg:text-[18px] md:text-[17px] text-[13px] flex pt-2  lg:gap-4  ms:gap-4  sm:gap-4  gap-2   '>
        <li className='hover:underline'> <Link href='/'>Home</Link></li>
        <li className='hover:underline'> <Link href='/about'>About</Link></li>
        <li className='hover:underline'> <Link href='/Blog'>Blogs</Link></li>
        <li className='hover:underline'> <Link href='/contact'>Contact</Link></li>
        </ul>
        </div>
  <div className='text-center'><div className='bg-green-400 font-[500] lg:text-[18px] md:text-[16px] text-[13px] hover:bg-green-500 py-2 lg:w-[130px] md:w-[120px] w-[80px] text-white rounded'><button className='hover:text-black'><Link href='/login'>Login</Link></button>/<button className='hover:text-black'><Link href='/signin'>SignIn</Link></button></div></div>


   </div>
   
   
   </>
  )
}

export default Navbar