import React from 'react';

function Offer() {
    return (
        <div className='h-auto w-full'>
            <div className='flex flex-col md:flex-row mx-4 md:mx-10 lg:mx-24 my-10 bg-[#CDFAD5] h-auto md:h-[850px] w-[90%] p-6 rounded-lg shadow-lg'>
                <div className='md:w-1/2 flex justify-center mt-10 md:mt-0'>
                    <img
                        src='https://img.freepik.com/premium-photo/woman-green-suit-with-word-happy-front_780838-2211.jpg'
                        alt="Fashion Collection"
                        className='w-[350px] h-[500px] md:w-[450px] md:h-[600px] mt-4 rounded-tl-3xl rounded-br-[70px] rounded-tr-[110px] rounded-bl-[110px] shadow-lg'
                    />
                </div>
                <div className='flex flex-col justify-center space-y-4 md:w-1/2'>
                    <h1 className='mt-6 text-center md:text-left ml-0 md:ml-10 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#185519]'>
                        Exclusive Offer
                    </h1>
                    <p className='mt-6 text-center md:text-left ml-0 md:ml-10 text-xl md:text-2xl font-medium text-[#185519]'>
                        Unlock the ultimate styles upgrade with our exclusive
                        <br />
                        offer enjoy savings of up to 40% off on our latest news
                        <br />
                        Arrivals.
                    </p>
                    <div className='flex justify-center md:ml-10 md:justify-start gap-4 mx-2'> {/* Adjusted to center and added margin */}
                        <div className='text-center bg-white h-[100px] w-[100px] text-2xl text-[#185519] font-extrabold font-serif'>
                            <p className='text-4xl mt-2'>06</p>
                            <p className='text-xl'>Days</p>
                        </div>
                        <div className='text-center bg-white h-[100px] w-[100px] text-2xl text-[#185519] font-extrabold font-serif'>
                            <p className='text-4xl mt-2'>18</p>
                            <p className='text-xl'>Hours</p>
                        </div>
                        <div className='text-center bg-white h-[100px] w-[100px] text-2xl text-[#185519] font-extrabold font-serif'>
                            <p className='text-4xl mt-2'>38</p>
                            <p className='text-xl'>Minutes</p>
                        </div>
                    </div>

                    <button className='mx-auto md:mx-10 mt-6 h-[50px] w-[200px] bg-[#185519] text-white text-lg hover:bg-[#143d13]'>
                        EXPLORE NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Offer;
