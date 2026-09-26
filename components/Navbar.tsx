import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { NAV_ITEMS,PRODUCTS} from '../constants';

export const Navbar: React.FC = () => {
const [searchOpen, setSearchOpen] = useState(false);
const [searchTerm, setSearchTerm] = useState('');
const [journalsOpen, setJournalsOpen] = useState(false);
const [isOpen, setIsOpen] = useState(false);
const searchResults = searchTerm.trim()
  ? PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : [];
 const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  // Real pages: allow normal navigation
  if (href.startsWith('/')) {
    return;
  }

  // Homepage sections
  if (window.location.pathname !== '/') {
    window.location.href = `/${href}`;
    return;
  }

  // Already on homepage — smooth scroll
  e.preventDefault();

  const element = document.querySelector(href);

  if (element) {
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  setSearchOpen(false);
};
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFDF8] border-b border-[#D8D0C4]/50">
    
    
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-1">
  <div className="flex justify-between items-center">
    {/* Logo */}
    <a
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
             <img
             src="/logo/logo.png"
        
             alt="Journal That Journey"
            className="h-12 sm:h-14 lg:h-20 w-auto object-contain"
/>
</a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
           {NAV_ITEMS.map((item) => (
  <div key={item.label} className="relative">
    {item.label === 'Journals' ? (
  <>
      <button
        onClick={() => setJournalsOpen(!journalsOpen)}
        className="text-[#1F3528] hover:text-brand-accent transition-colors font-sans text-sm flex items-center"
      >
        Journals <span className="ml-1 text-xs">⌄</span>
      </button>
      {journalsOpen && (
  <div className="absolute top-full left-0 mt-3 w-56 bg-[#FFFDF8] border border-[#D8D0C4] shadow-lg rounded-sm py-2 z-50">
    <a
      href="#collection"
      onClick={(e) => {
        handleNavClick(e, "#collection");
        setJournalsOpen(false);
      }}
      className="block px-5 py-3 text-sm text-[#1F3528] hover:bg-[#F4F0E8]"
    >
      All Journals
    </a>
  </div>
      )}
  </>


    ) : (
      <a
        href={item.href}
        onClick={(e) => handleNavClick(e, item.href)}
        className="text-[#1F3528] hover:text-brand-accent transition-colors font-sans text-sm"
      >
        {item.label}
      </a>
    )}
  </div>
))}
<div className="flex items-center space-x-5 ml-4">
  <button
  type="button"
  aria-label="Search"
  onClick={() => setSearchOpen(!searchOpen)}
  className="text-[#1F3528] hover:text-brand-accent transition-colors"
>
  <Search size={20} strokeWidth={1.7} />
</button>

  <button
    type="button"
    aria-label="Shopping bag"
  onClick={() => {
    document.querySelector('#journals')?.scrollIntoView({
      behavior: 'smooth'
    });
  }}
  className="text-[#1F3528] hover:text-brand-accent transition-colors"
>
  <ShoppingBag size={20} strokeWidth={1.7} />
</button>

</div>
            
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-light hover:text-brand-accent transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* Search Panel */}
{searchOpen && (
  <div className="absolute top-full left-0 w-full bg-[#FFFDF8] border-t border-[#D8D0C4] shadow-md z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-0">
      <div className="relative max-w-xl mx-auto">
{searchTerm.trim() && (
  <div className="mt-2 bg-white border border-[#D8D0C4] shadow-lg">
    {searchResults.length > 0 ? (
      searchResults.map((product) => (
        <a
          key={product.id}
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3 border-b border-[#EEE8DF] last:border-b-0 hover:bg-[#F4F0E8] transition-colors"
        >
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-12 h-16 object-cover"
          />

          <div>
            <p className="font-serif text-[#315A40]">
              {product.name}
            </p>

            <p className="text-sm text-[#8A8178]">
              {product.price}
            </p>
          </div>
        </a>
      ))
    ) : (
      <p className="p-4 text-center text-[#8A8178]">
        No journals found.
      </p>
    )}
  </div>
)}
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8178]"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search journals..."
          autoFocus
          className="w-full border border-[#D8D0C4] bg-white py-3 pl-12 pr-4 text-[#1F3528] outline-none focus:border-[#B58A2A]"
        />

      </div>
    </div>
  </div>
)}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-brand-primary/30 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible h-auto py-6' : 'opacity-0 invisible h-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-brand-light text-lg hover:text-brand-accent font-serif cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://author.amazon.com/home?authorId=amzn1.amazonauthor.author.v1.tv4tonh4575180grgps93torct"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-brand-accent text-lg font-serif font-bold border-b border-brand-accent cursor-pointer"
          >
            Shop Now
          </a>
        </div>
      </div>
    </nav>
  );
};