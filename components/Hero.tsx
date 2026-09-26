import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      const headerOffset = 90;
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
      className="
        relative
        min-h-[680px]
        lg:min-h-[680px]
        overflow-hidden
        bg-[#F5F1E8]
      "
    >

      {/* =====================================================
          DESKTOP HERO IMAGE
          LEAVE DESKTOP DESIGN AS-IS
          ===================================================== */}
      <img
        src="/images/homepage-hero.png"
        alt="Journal That Journey - Be Still Journal"
        className="
          hidden
          md:block
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
        "
      />

     {/* =====================================================
    MOBILE HERO COMPOSITION
    MOBILE ONLY — DO NOT AFFECT DESKTOP
    ===================================================== */}

<div
  className="
    md:hidden
    absolute
    inset-0
    overflow-hidden
    bg-[#F5F1E8]
  "
>
 {/* MOBILE HERO IMAGE — MOBILE ONLY */}
<img
  src="/images/homepage-hero-mobile.png"
  alt="Journal That Journey - Be Still Journal"
  className="
    md:hidden
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-center
  "
/>

  {/* Soft cream blend on the left */}
  <div
    className="
      absolute
      inset-y-0
      left-0
      w-[58%]
      bg-gradient-to-r
      from-[#F5F1E8]/65
      via-[#F5F1E8]/25
      to-transparent
    "
  />
</div>

      {/* =====================================================
          DESKTOP OVERLAY
          ===================================================== */}
      <div
        className="
          hidden
          md:block
          absolute
          inset-0
          pointer-events-none
          bg-gradient-to-r
          from-[#F5F1E8]/35
          via-[#F5F1E8]/10
          to-transparent
        "
      />

  

      {/* =====================================================
          CONTENT
          ===================================================== */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
          min-h-[680px]
          lg:min-h-[800px]
          flex
          items-center
        "
      >

        <div
  className="
    w-[68%]
    md:w-[58%]
    lg:w-[48%]
    pt-10
    md:pt-0
  "
>

          {/* =================================================
              HEADING
              ================================================= */}
          <h1
            className="
              font-serif
              text-[#1F3528]
              text-[46px]
              sm:text-6xl
              md:text-8xl
              lg:text-9xl
              leading-[0.98]
              mb-6
              md:mb-7
            "
          >
            <span className="block">
              Journal That
            </span>

            <span className="block italic text-[#A37B35]">
              Journey
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
              ================================================= */}
          <p
            className="
              text-[#4D5A50]
              text-[15px]
              sm:text-base
              md:text-lg
              leading-[1.55]
              max-w-[310px]
              md:max-w-[330px]
              lg:max-w-xl
              mb-7
              md:mb-8
            "
          >
            Faith-based journals to help you grow closer to God,
            stay consistent in prayer, and walk in His purpose
            every day.
          </p>

          {/* =================================================
              BUTTONS
              ================================================= */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-3
              sm:gap-4
            "
          >

            {/* SHOP JOURNALS */}
            <a
              href="https://www.amazon.com/stores/Vanessa-Richards/author/B0GDW64HKR"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                bg-[#315B49]
                text-white
                px-4
                py-2
                text-xs
                sm:text-sm
                font-semibold
                uppercase
                tracking-wider
                transition-all
                duration-300
                hover:bg-[#1F3528]
                w-[170px]
                sm:w-auto
              "
            >
              Shop Journals
            </a>

            {/* OUR STORY */}
            <a
              href="#story"
              onClick={(e) => handleScroll(e, '#story')}
              className="
                inline-flex
                items-center
                justify-center
                border
                border-[#315B49]
                text-[#315B49]
                px-4
                py-2
                text-xs
                sm:text-sm
                font-semibold
                uppercase
                tracking-wider
                transition-all
                duration-300
                hover:bg-[#315B49]
                hover:text-white
                w-[170px]
                sm:w-auto
              "
            >
              Our Story
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;