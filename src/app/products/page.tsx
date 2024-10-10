'use client';
import React, { useState } from 'react';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const products = [
  {
    id: 1,
    name: "Regular Fit Long Sleeves Top",
    price: "$38.99",
    rating: 5.0,
    image: "https://img.joomcdn.net/4a008b66069f0e4f8720a0e3dd9f02b308f1ae38_original.jpeg",
    alt: "Regular Fit Long Sleeves Top",
  },
  {
    id: 2,
    name: "Light Green Suit Blazer Jacket",
    price: "$62.99",
    rating: 4.9,
    image: "https://i0.wp.com/www.fashionchingu.com/wp-content/uploads/2022/04/Light-Green-Suit-Blazer-Yoona-Girls-Generation-2.jpeg",
    alt: "Black Crop Tailored Jacket",
  },
  {
    id: 3,
    name: "Texture Sunset Shirt",
    price: "$49.99",
    rating: 5.0,
    image: "https://i.pinimg.com/originals/fe/28/c7/fe28c75fb2484f1c930897fead7d3b53.jpg",
    alt: "Texture Sunset Shirt",
  },
  {
    id: 4,
    name: "Lightweight Denim Jacket",
    price: "$55.99",
    rating: 4.8,
    image: "https://img.joomcdn.net/5d859e9b65344a45ab2211a01691489af35d8e71_original.jpeg",
    alt: "Lightweight Denim Jacket",
  },
  {
    id: 5,
    name: "Casual Striped T-Shirt",
    price: "$28.99",
    rating: 4.7,
    image:"https://img.lazcdn.com/g/p/9b9431aa2d8d9bf40b02aa3d128af175.jpg_960x960q80.jpg_.webp",
    alt: "Casual Striped T-Shirt",
  },
  {
    id: 6,
    name: "Chic High-Waisted Trousers",
    price: "$44.99",
    rating: 4.9,
    image: "https://i.pinimg.com/736x/79/b4/f1/79b4f10b364ce46f3042d79d0d992f50.jpg",
    alt: "Chic High-Waisted Trousers",
  },
  {
    id: 7,
    name: "Elegant Midi Dress",
    price: "$79.99",
    rating: 5.0,
    image: "https://i.etsystatic.com/5968711/r/il/961dc0/3867706888/il_570xN.3867706888_gdqo.jpg",
    alt: "Elegant Midi Dress",
  },
  {
    id: 8,
    name: "Stylish Ankle Boots",
    price: "$89.99",
    rating: 4.8,
    image: "https://i.pinimg.com/736x/7a/9d/dc/7a9ddcca7e9bb3711c635ad3a4da857d.jpg",
    alt: "Stylish Ankle Boots",
  },
];

function Products() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ['SALE', 'HOT', 'NEW ARRIVAL', 'ACCESSORIES'];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className='p-4 text-center'>
      <h1 className='text-5xl text-[#185519] mt-20 mb-20 font-serif font-semibold'>Our Products</h1>
      <ul className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-4'>
  {categories.map((category) => (
    <li
      key={category}
      onClick={() => handleCategoryClick(category)}
      className={`cursor-pointer text-center sm:text-left ${activeCategory === category ? 'underline font-bold ' : 'text-gray-500 font-semibold'}`}
    >
      {category}
    </li>
  ))}
</ul>

      <div className='mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10'>
        {products.map((product) => (
          <div key={product.id} className='shop-item text-center'>
            <img
              src={product.image}
              alt={product.alt}
              className='h-[400px] w-full object-cover rounded-lg shadow-md'
              loading="lazy"
            />
            <p className='mt-4 font-bold'>{product.name}</p>
            <p className='text-gray-500 flex items-center justify-center'>
              {product.price} | {product.rating}
              <span className="inline text-yellow-500 ml-1">
                <MdOutlineStarPurple500 size={20} />
              </span>
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;
