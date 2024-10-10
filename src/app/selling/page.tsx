import React from 'react';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const products = [
  {
    id: 1,
    name: "Regular Fit Long Sleeves Top",
    price: "$38.99",
    rating: 5.0,
    image: "https://www.pluspreorder.com/cdn/shop/products/Plus-Size-Korean-Layer-Knit-Buttons-Long-Sleeve-Top-EXTRA-BIG-SIZE-5_1024x1024.jpg?v=1677665870",
    alt: "Regular Fit Long Sleeves Top",
  },
  {
    id: 2,
    name: "Black Crop Tailored Jacket",
    price: "$62.99",
    rating: 4.9,
    image: "https://fuzzymore.com/cdn/shop/files/Cropped_Blazer_korean_street_fashion_1.jpg?v=1694009660",
    alt: "Black Crop Tailored Jacket",
  },
  {
    id: 3,
    name: "Texture Sunset Shirt",
    price: "$49.99",
    rating: 5.0,
    image: "https://www.shutterstock.com/image-photo/full-size-photo-good-mood-600nw-2272037873.jpg",
    alt: "Texture Sunset Shirt",
  },
];

function Selling() {
  return (
    <div className='p-4 text-center md:mx-10'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl text-[#185519] mt-10 sm:mt-16 font-serif font-semibold'>Best Selling</h1>
      <p className='text-lg sm:text-xl mt-5 mb-5 font-serif font-medium'>
        Get in on the trend with our curated selection of best-selling styles.
      </p>
      
      {/* Responsive grid layout for products */}
      <div className='shop-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center mt-10'>
        {products.map((product) => (
          <div key={product.id} className='shop-item text-center'>
            <img 
              src={product.image} 
              alt={product.alt} 
              className='item-image h-[250px] sm:h-[400px] md:h-[500px] w-full object-cover rounded-lg shadow-md' 
              loading="lazy"
            />
            <p className='mt-4 font-bold text-base sm:text-lg'>{product.name}</p>
            <p className='text-gray-500 flex items-center justify-center'>
              {product.price} | {product.rating} 
              <span className="inline text-yellow-500 ml-1">
                <MdOutlineStarPurple500 size={20} />
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Centered button */}
      <div className='mt-10 flex justify-center'>
        <button 
          className='see-all-btn border-black border-2 bg-white text-black px-6 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-gray-200 hover:text-gray-800 flex items-center justify-center'
          aria-label="See all products"
        >
          SEE ALL <FaArrowRightLong  />
        </button>
      </div>
    </div>
  );
}

export default Selling;
