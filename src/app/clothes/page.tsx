import React from 'react';

const products = [
  {
    id: 1,
    name: "Accessories",
    description: "Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S340838a0ad2f4c8594b885bc0d7b8d06r.jpg_640x640Q90.jpg_.webp",
    alt: "Regular Fit Long Sleeves Top",
  },
  {
    id: 2,
    name: "Dresses",
    description: "Explore a stunning range of designer dresses, including evening gowns and chic day dresses.",
    image: "https://ae01.alicdn.com/kf/H221017ad21a94b028e053840e919d5ecp.jpg_960x960.jpg",
    alt: "Black Crop Tailored Jacket",
  },
  {
    id: 3,
    name: "Outerwear",
    description: "Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.",
    image: "https://img.freepik.com/premium-photo/pretty-korean-girl-holding-lot-shopping-bags-two-hands_553012-24045.jpg",
    alt: "Textured Sunset Shirt",
  },
];

function Clothes() {
  return (
    <div className="p-6 md:mx-10 lg:mx-20 text-center">
      <h1 className="text-[#185519] text-5xl mt-10 mb-10 font-serif font-semibold">Designer Clothes For You</h1>
      <p className="text-[#185519] text-xl mt-5 mb-5 font-serif font-medium">
        Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
      </p>
      <div className="shop-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {products.map((product) => (
          <div key={product.id} className="shop-item text-center">
            <div className="image-container mb-4">
              <img 
                src={product.image} 
                alt={product.alt} 
                className="item-image h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover rounded-lg shadow-md" 
                loading="lazy"
              />
            </div>
            <p className="mt-4 font-bold text-xl font-sans">{product.name}</p>
            <p className="text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clothes;
