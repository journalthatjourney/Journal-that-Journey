import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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
  };

  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/hero-botanical.png')" }}
>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
  {/* Soft cream center */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#A8B99B]/55 via-[#F2F0DF]/90 to-[#9CAF91]/60" />

  {/* Watercolor-style sage washes */}
  <div className="absolute -top-24 -left-24 w-[48%] h-[75%] rounded-full bg-[#78927A]/35 blur-3xl" />
  <div className="absolute top-10 -right-24 w-[45%] h-[80%] rounded-full bg-[#718B70]/40 blur-3xl" />
  <div className="absolute -bottom-32 left-[15%] w-[55%] h-[45%] rounded-full bg-[#D7D6B8]/45 blur-3xl" />
</div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">

            <p className="font-sans text-[#8A6D3B] font-bold tracking-[0.25em] uppercase text-xs md:text-sm mb-6">
              Write • Reflect • Grow
            </p>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1F3528] leading-tight mb-7">
              Journals for the
              <span className="block italic text-[#A37B35]">
                Journey Within
              </span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-[#4D5A50] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-5">
              Create space to pray, reflect, heal, and grow.
            </p>

            <p className="font-sans text-base md:text-lg text-[#667068] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Thoughtfully designed journals to help you deepen your faith,
              capture your thoughts, and walk intentionally through every
              season.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a
                href="#collection"
                onClick={(e) => handleScroll(e, '#collection')}
                className="inline-flex justify-center items-center px-8 py-4 bg-[#1F3528] text-white font-sans text-sm uppercase tracking-widest hover:bg-[#A37B35] transition-colors duration-300"
              >
                Shop the Collection
              </a>

              <a
                href="#story"
                onClick={(e) => handleScroll(e, '#story')}
                className="inline-flex justify-center items-center px-8 py-4 border border-[#1F3528] text-[#1F3528] font-sans text-sm uppercase tracking-widest hover:bg-[#1F3528] hover:text-white transition-colors duration-300"
              >
                Our Story
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">

              <div className="absolute -top-5 -left-5 w-full h-full border border-[#A37B35]/40" />

              <div className="relative bg-[#DCCDBA] p-8 md:p-12 shadow-xl">
                <div className="border border-[#A37B35]/30 p-8 md:p-10 text-center">

                  <p className="font-serif italic text-[#A37B35] text-lg mb-5">
                    Journal That Journey
                  </p>

                  <h2 className="font-serif text-3xl md:text-4xl text-[#1F3528] leading-snug mb-6">
                    Your story deserves
                    <span className="block italic">
                      space to be written.
                    </span>
                  </h2>

                  <div className="w-16 h-px bg-[#A37B35] mx-auto mb-6" />

                  <p className="font-sans text-[#5F675F] leading-relaxed">
                    Faith-filled pages created for prayer, reflection,
                    gratitude, purpose, and the seasons in between.
                  </p>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
