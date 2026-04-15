import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-brand-primary/5">
      {/* Image Area - Taller aspect ratio for books */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-surface">
        <img
  src={product.imageSrc}
  alt={product.imageAlt}
  className="rounded-lg shadow-xl transform scale-105 hover:scale-110 transition duration-300"
/>
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a 
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-brand-light text-brand-dark px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg hover:bg-brand-accent"
            >
                <ShoppingCart size={18} />
                Buy on Amazon
            </a>
        </div>

        {/* Price Tag - Always Visible */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-brand-dark font-serif font-bold px-4 py-1.5 rounded-full shadow-sm text-lg">
          {product.price}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
            {product.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow border-t border-gray-100 pt-3 mt-1 font-medium">
          {product.imageAlt}
        </p>
        
        {/* Secondary Mobile CTA */}
        <div className="mt-auto md:hidden">
             <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer" 
              className="block w-full text-center bg-brand-dark text-white py-3 rounded-lg font-medium text-sm"
             >
                 View on Amazon
             </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
