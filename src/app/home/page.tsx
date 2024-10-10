import React from 'react';

function Home() {
  return (
    <div className='flex flex-col md:flex-row bg-[#CDFAD5] h-auto md:h-[900px] w-full p-6'>
      {/* Left Section: Text and Button */}
      <div className='flex flex-col justify-center space-y-4 md:w-1/2'>
        <h1 className='lg:ml-56 mt-6 mx-auto text-center md:text-left font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#185519]'>
          Discover And
          <br />
          <span className='mt-10'>Find Your Own</span>
          <br />
          <span className='mt-10'>Fashion!</span>
        </h1>
        <p className='  lg:ml-56  mt-6 lg:mx-auto text-center md:text-left text-sm sm:text-xl md:text-2xl font-medium text-[#185519]'>
          Explore our curated collection of stylish 
          <br className='hidden md:block' />
          clothing and accessories tailored to your 
          <br className='hidden md:block' />
          unique taste.
        </p>
        <button className='  mx-auto md:mx-0 mt-8 md:ml-0 h-[50px] lg:ml-56 w-[180px] sm:w-[200px] bg-[#185519] text-white text-lg hover:bg-[#143d13]'>
          EXPLORE NOW
        </button>
      </div>

      {/* Right Section: Image */}
      <div className='md:w-1/2 flex justify-center mt-10 md:mt-0'>
        <img 
          src='https://img.freepik.com/premium-photo/woman-green-suit-with-word-happy-front_780838-2211.jpg'
          alt="Fashion Collection" 
          className='w-[300px] sm:w-[400px] md:w-[450px] h-auto md:h-[600px] mt-16 md:mt-28 rounded-tr-3xl rounded-bl-[70px] rounded-tl-[110px] rounded-br-[110px] shadow-lg' 
        />
      </div>
    </div>
  );
}

export default Home;
