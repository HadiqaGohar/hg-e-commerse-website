import React from 'react';

function FeedbackCorner() {
  return (
    <div className="feedback-corner p-4 mt-10 mb-20">
      <h2 className="text-4xl text-[#185519] font-semibold text-center mb-4 mt-24">Feedback Corner</h2>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 md:mx-20">
        {/* Feedback Item 1 */}
        <div className="feedback-item p-4 bg-white rounded-md shadow-md flex-1 md:max-w-xs">
          <h1 className='text-5xl text-[#185519]'>❝</h1>
          <p className="font-bold text-2xl mb-2">Emily Wilson</p>
          <blockquote className="italic mb-2">
            "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"
          </blockquote>
        </div>

        {/* Feedback Item 2 */}
        <div className="md:ml-5 feedback-item p-4 bg-[#7FB77E] rounded-md shadow-md flex-1 md:max-w-xs">
          <h1 className='text-5xl text-[#2a6e2b]'>❝</h1>
          <p className="font-bold text-2xl mb-2">Sarah Thompson</p>
          <blockquote className="italic mb-2">
            "I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!"
          </blockquote>
        </div>

        {/* Feedback Item 3 */}
        <div className="md:ml-5 feedback-item p-4 bg-white rounded-md shadow-md flex-1 md:max-w-xs">
          <h1 className='text-5xl text-[#185519]'>❝</h1>
          <p className="font-bold text-2xl mb-2">Olivia Martinez</p>
          <blockquote className="italic mb-2">
            "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!"
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCorner;
