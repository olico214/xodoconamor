import React from 'react';

const ProductCard = ({ image, title, price, onAddToCart }) => {
  return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">${price}</p>
            </div>
            <div className="px-6 py-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={onAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
       


  )

};

export default ProductCard;