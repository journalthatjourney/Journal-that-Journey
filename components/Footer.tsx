import React from 'react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#0F2326] text-brand-light py-10 border-t border-brand-primary/20 relative overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute top-0 right-0 p-20 bg-brand-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <span className="font-serif text-2xl font-bold tracking-wide text-white">Journal That Journey</span>
          <p className="text-sm text-gray-400 mt-2 font-light tracking-wide">Faith. Reflection. Growth.</p>
        </div>
        <div className="flex items-center gap-5 mt-5">
  <a
    href="https://www.instagram.com/journalthatjourney"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-brand-accent transition-colors"
    aria-label="Follow Journal That Journey on Instagram"
  >
    Instagram
  </a>

  <a
    href="https://www.tiktok.com/@journalthatjourney"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-brand-accent transition-colors"
    aria-label="Follow Journal That Journey on TikTok"
  >
    TikTok
  </a>
</div>
        <div className="flex space-x-8 text-sm text-gray-400 font-sans tracking-wider uppercase">
           <a 
             href="#home" 
             onClick={(e) => handleScroll(e, '#home')}
             className="hover:text-brand-accent transition-colors cursor-pointer"
           >
             Home
           </a>
           <a 
             href="#collection" 
             onClick={(e) => handleScroll(e, '#collection')}
             className="hover:text-brand-accent transition-colors cursor-pointer"
           >
             Products
           </a>
           <a 
             href="#contact" 
             onClick={(e) => handleScroll(e, '#contact')}
             className="hover:text-brand-accent transition-colors cursor-pointer"
           >
             Contact
           </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <div className="flex items-center gap-3">
            <p>&copy; {new Date().getFullYear()} Journal That Journey. All rights reserved.</p>
            <span className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></span>
            <p className="font-serif italic text-brand-accent/60">Est. 2024</p>
        </div>
        <p className="mt-2 md:mt-0 opacity-50">Designed with purpose.</p>
      </div>
    </footer>
  );
};

export default Footer;