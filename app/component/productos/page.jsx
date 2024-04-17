"use client"
import React from 'react';
import ProductCard from './productcards';

const MyPage = () => {
  const handleAddToCart = () => {
    // Add to cart logic goes here
    console.log('Product added to cart!');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <ProductCard
        image="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
        title="Your Product"
        price="19.99"
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default MyPage;
