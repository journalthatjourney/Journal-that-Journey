import React from "react";

const FreeJournal: React.FC = () => {
  return (
    <section className="min-h-[65vh] flex items-center bg-[#FAF8F2] py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">

        <p className="uppercase text-sm tracking-[0.3em] text-[#6B6258] mb-6">
          YOUR JOURNEY BEGINS HERE
        </p>

        <h1 className="font-serif text-5xl md:text-6xl text-[#315A40] leading-tight mb-6">
          You're In!
        </h1>

        <p className="text-[#6B6258] text-lg mb-6">
          Thank you for joining the 30 Days Closer to God Challenge. Your free journal is ready.
        </p>

        <p className="max-w-2xl mx-auto text-[#6B6258] mb-8">
          Take the next 30 days to create intentional space for prayer,
          Scripture, reflection, and time with God.
        </p>

        <a
          className="inline-block bg-[#315A40] text-white py-4 px-6 uppercase tracking-[0.12em] text-sm hover:bg-[#264832] transition-colors rounded"
          href="/download/30-days-closer-to-god.pdf"
          download="30-days-closer-to-god.pdf"
        >
          DOWNLOAD MY FREE JOURNAL →
        </a>

        <p className="text-sm text-[#8A8178] mt-6">
          Your free journal is ready to download. We’re so glad you’re taking this journey with us.
        </p>

      </div>
    </section>
  );
};

export default FreeJournal;