import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className='mt-[60px] mb-[60px]'>
        {/* Main Title */}
        <h1 className='lg:text-[43px] md:text-[35px] sm:text-[30px] text-[28px] text-blue-950 text-center font-semibold'>
          Welcome To Our Blog Website
        </h1>

        <h1 className='lg:text-[43px] md:text-[35px] sm:text-[30px] text-[28px] text-blue-950 text-center font-semibold'>
          I am Qaim Khuwaja
        </h1>

        {/* Card Container */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 place-items-center mt-[20px] gap-[20px] mx-3'>
          
        

          {/* Card 1 */}
          <div className='bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl'>
            <div className='py-7 px-5'>
              <h1 className='text-[22px] text-blue-950 font-bold mb-4'>Latest Blogs</h1>
              <p className='text-[16px] text-gray-600 mb-6'>
                Dive into our diverse blog collection and explore various subjects...
              </p>
              <button className='text-blue-500 hover:text-blue-700 border-2 border-blue-800 py-2 px-4 rounded-lg transition-all'>
                <Link href='/Blog'>See Blogs...</Link>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl'>
            <div className='py-7 px-5'>
              <h1 className='text-[22px] text-blue-950 font-bold mb-4'>About</h1>
              <p className='text-[16px] text-gray-600 mb-6'>
                Learn more about our mission, team and story behind the creation of QAFIX...
              </p>
              <button className='text-blue-500 hover:text-blue-700 border-2 border-blue-800 py-2 px-4 rounded-lg transition-all'>
                <Link href='/about'>Read more...</Link>
              </button>
            </div>
          </div>


            {/* Card 3 */}
            <div className='bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl'>
            <div className='py-7 px-5'>
              <h1 className='text-[22px] text-blue-950 font-bold mb-4'>FAQs</h1>
              <p className='text-[16px] text-gray-600 mb-6'>
                Provide answers to common Questions about our platform, blog or services...
              </p>
              <button className='text-blue-500 hover:text-blue-700 border-2 border-blue-800 py-2 px-4 rounded-lg transition-all'>
                <Link href='/faq'>Read more...</Link>
              </button>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Hero;