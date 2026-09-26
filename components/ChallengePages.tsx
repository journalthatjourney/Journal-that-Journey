import React, { useState, FormEvent } from "react";

const ChallengePage: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/mgawyrgl", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      const json = await res.json();

      if (res.ok) {
        window.location.assign("/free-journal");
      } else {
        setError(
          json.error || "Something went wrong. Please try again."
        );
        setSubmitting(false);
      }
    } catch (err) {
      setError("Network error. Please try again later.");
      setSubmitting(false);
    }
  }

  return (
    <section className="min-h-screen bg-[#FAF8F2] py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <h1 className="font-serif text-5xl md:text-6xl text-[#315A40] leading-tight">
            30 Days Closer to God
          </h1>

          <div className="w-20 h-px bg-[#B58A2A] mx-auto my-6" />

          <p className="text-lg text-[#6B6258] leading-relaxed">
            Grow your faith. Deepen your prayer life. Make intentional time
            for God each day.
          </p>

        </div>


        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/images/30 days challenge image.png"
              alt="30 Days Closer to God Challenge"
              className="w-full max-w-md object-contain"
            />
          </div>


          {/* SIGNUP */}
          <div className="bg-white p-8 md:p-10 shadow-sm border border-[#E5DFD3]">

            <h2 className="font-serif text-3xl text-[#315A40] mb-4">
              Start Your Free Journey
            </h2>

            <p className="text-[#6B6258] leading-relaxed mb-8">
              Sign up to receive your free 30 Days Closer to God journal
              and begin your journey of prayer, Scripture, reflection,
              and intentional time with God.
            </p>


            <form onSubmit={handleSubmit} className="space-y-5">

              {/* FIRST NAME */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm text-[#315A40] mb-2"
                >
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full border border-[#D8D0C4] px-4 py-3 bg-[#FAF8F2] focus:outline-none focus:border-[#315A40]"
                  placeholder="Your first name"
                />
              </div>


              {/* LAST NAME */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm text-[#315A40] mb-2"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full border border-[#D8D0C4] px-4 py-3 bg-[#FAF8F2] focus:outline-none focus:border-[#315A40]"
                  placeholder="Your last name"
                />
              </div>


              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-[#315A40] mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-[#D8D0C4] px-4 py-3 bg-[#FAF8F2] focus:outline-none focus:border-[#315A40]"
                  placeholder="you@example.com"
                />
              </div>


              {/* ERROR */}
              {error && (
                <p className="text-sm text-red-600">
                  {error}
                </p>
              )}


              {/* BUTTON */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#315A40] text-white py-4 px-6 tracking-wide hover:bg-[#244532] transition disabled:opacity-50"
              >
                {submitting ? "PLEASE WAIT..." : "YES, I'M IN! →"}
              </button>


              {/* PRIVACY */}
              <p className="text-xs text-[#8A8177] text-center leading-relaxed">
                Your information will be used to send you the free journal
                and occasional updates from Journal That Journey.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ChallengePage;