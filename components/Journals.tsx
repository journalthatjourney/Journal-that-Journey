import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const Journals: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#FAF8F2] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Page Heading */}
        <div className="text-center mb-12">
          <p className="text-brand-text/70 uppercase tracking-[0.25em] text-sm mb-4">
          
          </p>

          <h1 className="font-serif text-5xl lg:text-6xl text-[#315A40] leading-tight">
            All Journals
          </h1>

          <div className="w-16 h-px bg-[#B5A82A] mx-auto my-5" />

          <p className="text-[#6B6258] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our collection of faith-filled journals created to help you
            write, reflect, grow, and draw closer to God.
          </p>
        </div>

        {/* ALL JOURNALS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Journals;