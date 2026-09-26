import React, { useState, FormEvent } from "react";

export default function Challenge() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

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
    <section
      id="challenge"
      className="bg-[#FAF8F2] py-10 lg:py-14"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-[1.05fr_1.55fr_1fr] gap-7 lg:gap-10 items-center">

          {/* LEFT SIDE — 30 DAYS */}
          <div className="text-center lg:text-left">

            <div className="flex justify-center lg:justify-start">
              <img
                src="/images/30-days-challenge-image.png"
                alt="30 Days Closer to God Challenge"
                className="w-full max-w-[420px] object-contain"
              />
            </div>

            <p className="text-[#6B6258] leading-relaxed max-w-xs mx-auto lg:mx-0 mt-6">
              A faith-filled journey of prayer, Scripture,
              reflection, and intentional journaling.
            </p>

          </div>


          {/* MIDDLE — CHALLENGE INFORMATION */}
          <div className="text-center lg:text-left">

            <h2 className="font-serif text-3xl lg:text-4xl text-[#315A40] leading-tight">
              30 Days Closer to God
              <br />
              Challenge
            </h2>

            <p className="font-serif italic text-lg text-[#B58A2A] mt-2">
              Grow your faith. Transform your life.
            </p>

            <p className="text-[#6B6258] mt-5 leading-relaxed max-w-xl">
              Join us for 30 days of intentional prayer, Scripture,
              reflection, and journaling as you strengthen your
              relationship with God.
            </p>

            {/* CHALLENGE FEATURES */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-6 text-sm text-[#315A40]">
              <span>✦ Daily Scripture</span>
              <span>✦ Guided Prayer</span>
              <span>✦ Journaling Prompts</span>
              <span>✦ Weekly Reflections</span>
              <span>✦ Prayer List</span>
              <span>✦ Community Support</span>
            </div>

          </div>


          {/* RIGHT SIDE — JOIN THE CHALLENGE */}
          <div className="border border-[#D8D0C4] bg-white/70 p-7 lg:p-8 shadow-sm">

            <h3 className="text-center uppercase tracking-[0.15em] text-[#315A40] font-semibold text-base">
              Join the Challenge
            </h3>

            <p className="text-center text-[#6B6258] text-sm mt-3 mb-6 leading-relaxed">
              Sign up to receive your free workbook and
              daily encouragement.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="text"
                name="firstName"
                placeholder="Your First Name"
                required
                className="w-full border border-[#D8D0C4] px-4 py-3 bg-white outline-none focus:border-[#315A40]"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                required
                className="w-full border border-[#D8D0C4] px-4 py-3 bg-white outline-none focus:border-[#315A40]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
                className="w-full border border-[#D8D0C4] px-4 py-3 bg-white outline-none focus:border-[#315A40]"
              />

              {error && (
                <p className="text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#315A40] text-white py-3 uppercase tracking-[0.12em] text-sm hover:bg-[#264832] transition-colors disabled:opacity-50"
              >
                {submitting ? "PLEASE WAIT..." : "YES, I'M IN! →"}
              </button>

            </form>

            <p className="text-center text-xs text-[#8A8178] mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}