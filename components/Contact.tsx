import React, { useState } from 'react';
import { Mail, Globe, Phone, Send, Instagram, Music2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative py-24 flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Rich Color Blend Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop"
          alt="Abstract rich green gradient"
          className="w-full h-full object-cover opacity-40 mix-blend-color-dodge"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-primary/80 to-brand-accent/20"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl w-full mx-auto px-4 sm:px-6">
        <div className="bg-brand-dark/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row">

          {/* LEFT: Contact Form */}
          <div className="lg:w-3/5 p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10">

            <h3 className="font-serif text-4xl text-brand-light mb-2">
              Get in Touch
            </h3>

            <p className="text-brand-light/60 mb-10 font-light">
              We'd love to hear from you. Send us a message below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-brand-accent text-xs font-bold mb-2 uppercase tracking-widest group-focus-within:text-white transition-colors"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent/50 transition-all"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-brand-accent text-xs font-bold mb-2 uppercase tracking-widest group-focus-within:text-white transition-colors"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent/50 transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-brand-accent text-xs font-bold mb-2 uppercase tracking-widest group-focus-within:text-white transition-colors"
                >
                  Leave a Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent/50 transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="group w-full bg-brand-accent text-brand-dark font-serif font-bold py-4 px-6 rounded-sm hover:bg-[#E5B96F] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mt-4"
              >
                Send Message

                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

            </form>
          </div>


          {/* RIGHT: Contact Info */}
          <div className="lg:w-2/5 p-8 md:p-14 flex flex-col justify-center relative bg-brand-primary/20">

            <div className="w-full">

              {/* Contact Heading */}
              <h3 className="font-serif text-3xl text-brand-light mb-10">
                Contact Info
              </h3>


              {/* Contact Details */}
              <div className="space-y-8">

                {/* Email */}
                <div className="flex items-start gap-5 group">

                  <div className="p-3 bg-white/5 rounded-full text-brand-accent border border-white/10 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300 flex-shrink-0">
                    <Mail size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-light text-sm uppercase tracking-wide mb-1">
                      Email
                    </h4>

                    <p className="text-brand-light/70 font-light break-words">
                      {SOCIAL_LINKS.email}
                    </p>
                  </div>

                </div>


                {/* Website */}
                <div className="flex items-start gap-5 group">

                  <div className="p-3 bg-white/5 rounded-full text-brand-accent border border-white/10 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300 flex-shrink-0">
                    <Globe size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-light text-sm uppercase tracking-wide mb-1">
                      Website
                    </h4>

                    <p className="text-brand-light/70 font-light break-words">
                      {SOCIAL_LINKS.website}
                    </p>
                  </div>

                </div>


                {/* Phone */}
                <div className="flex items-start gap-5 group">

                  <div className="p-3 bg-white/5 rounded-full text-brand-accent border border-white/10 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300 flex-shrink-0">
                    <Phone size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-light text-sm uppercase tracking-wide mb-1">
                      Phone
                    </h4>

                    <p className="text-brand-light/70 font-light">
                      {SOCIAL_LINKS.phone}
                    </p>
                  </div>

                </div>

              </div>


              {/* FOLLOW US */}
              <div className="mt-12 pt-8 border-t border-brand-accent/30 w-full">

                <h4 className="font-bold text-brand-light text-sm uppercase tracking-[0.15em] mb-2">
                  Follow Us
                </h4>

                <p className="text-brand-light/60 font-light text-sm mb-6">
                  Stay connected for inspiration, updates and more.
                </p>


                {/* Social Links */}
                <div className="flex flex-col gap-4">

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/journalthatjourney"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group w-fit"
                    aria-label="Follow Journal That Journey on Instagram"
                  >

                    <span className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                      <Instagram size={21} />
                    </span>

                    <span className="text-brand-light/80 group-hover:text-brand-accent transition-colors">
                      Instagram
                    </span>

                  </a>


                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@journalthatjourney"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group w-fit"
                    aria-label="Follow Journal That Journey on TikTok"
                  >

                    <span className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                      <Music2 size={21} />
                    </span>

                    <span className="text-brand-light/80 group-hover:text-brand-accent transition-colors">
                      TikTok
                    </span>

                  </a>

                </div>

              </div>

            </div>


            {/* Decoration */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none"></div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;