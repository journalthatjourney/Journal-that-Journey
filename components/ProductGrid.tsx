import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';

const ProductGrid: React.FC = () => {
  return (
<section id="journals" className="relative bg-brand-light pb-16 pt-6">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

    <div className="text-center mb-8">
  <p className="text-brand-text/70 text-xs uppercase tracking-[0.25em] mb-2">
    
  </p>

  <h2 className="font-serif text-7xl lg:text-8xl text-brand-primary leading-tight">
    Featured <span className="italic font-light">Journals</span>
  </h2>

  <div className="h-[1px] w-20 bg-brand-accent/50 mx-auto mt-3 mb-3" />

  <p className="text-brand-text text-base">
    Write. Reflect. Grow In Faith.
  </p>
</div>

    {/* YOUR EXISTING JOURNAL GRID STAYS HERE */}

        {/* Grid Layout for 6 Items */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 items-start">
          {PRODUCTS.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
  <a
    href="/journals"
    className="inline-flex items-center justify-center border border-brand-primary px-10 py-3 text-sm uppercase tracking-[0.15em] text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300"
  >
    View All Journals →
  </a>
</div>
        <div className="mt-24 text-center relative">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-primary/10 -z-10"></div>
             <span className="bg-brand-light px-6 text-brand-primary italic font-serif text-2xl relative z-10">
                "Write the vision, and make it plain on tablets, that he may run who reads it." — Habakkuk 2:2
             </span>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;