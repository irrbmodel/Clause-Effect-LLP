import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from './Icons';
import TextReveal from './TextReveal';
import Magnetic from './Magnetic';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'counselling',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide details of your enquiry';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'counselling',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-darker grid-bg border-b border-black/4">
      {/* Background Soft Glows */}
      <div className="glow-red w-[500px] h-[500px] top-1/2 left-0 opacity-15" />
      <div className="glow-blue w-[400px] h-[400px] -bottom-20 -right-20 opacity-15" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Panel: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Consultation Desk</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6 font-display">
                <TextReveal>Connect With Us</TextReveal>
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                Initiate a discussion. Whether you are seeking career placement coaching, arbitration counsel, corporate document reviews, or academic registrations, our legal secretariat is here to coordinate.
              </p>

              {/* Address details */}
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-brand-blue/5 border border-brand-blue/10 text-brand-blue shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Intake</h4>
                    <a href="mailto:secretariat@clauseandeffect.in" className="text-slate-800 font-bold hover:text-brand-blue transition-colors duration-200 text-sm">
                      secretariat@clauseandeffect.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-brand-red/5 border border-brand-red/10 text-brand-red shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone Hotline</h4>
                    <a href="tel:+919876543210" className="text-slate-800 font-bold hover:text-brand-red transition-colors duration-200 text-sm">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Office Chambers</h4>
                    <p className="text-slate-600 text-sm">
                      Level 4, Chambers Building, Legal District, New Delhi - 110001, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response note */}
            <div className="mt-12 p-4 rounded-2xl bg-white border border-black/4 flex items-center gap-3 shadow-xs">
              <Clock className="text-brand-blue shrink-0 animate-pulse" size={20} />
              <div className="text-xs text-slate-500 font-medium">
                We guarantee a review and follow-up response within 24 business hours.
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-black/4 rounded-3xl p-6 md:p-8 relative h-full flex flex-col justify-center shadow-[0_25px_60px_-15px_rgba(15,23,42,0.04)]">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                            errors.name ? 'border-brand-red' : 'border-black/6 focus:border-brand-blue focus:bg-white'
                          } text-slate-800 text-sm focus:outline-none transition-all duration-300`}
                          placeholder="Your Name"
                          data-hover="true"
                          data-hover-type="blue"
                        />
                        {errors.name && (
                          <span className="text-[10px] text-brand-red font-semibold">{errors.name}</span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                            errors.email ? 'border-brand-red' : 'border-black/6 focus:border-brand-blue focus:bg-white'
                          } text-slate-800 text-sm focus:outline-none transition-all duration-300`}
                          placeholder="you@example.com"
                          data-hover="true"
                          data-hover-type="blue"
                        />
                        {errors.email && (
                          <span className="text-[10px] text-brand-red font-semibold">{errors.email}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-black/6 focus:border-brand-blue focus:bg-white text-slate-800 text-sm focus:outline-none transition-all duration-300"
                          placeholder="+91 XXXXX XXXXX"
                          data-hover="true"
                          data-hover-type="blue"
                        />
                      </div>

                      {/* Service selector */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Service of Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-black/6 focus:border-brand-blue focus:bg-white text-slate-800 text-sm focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                          data-hover="true"
                          data-hover-type="blue"
                        >
                          <option value="counselling">Career Counselling</option>
                          <option value="consulting">Legal Consultancy</option>
                          <option value="courses">Certificate Courses</option>
                          <option value="arbitration">Arbitration & Mediation</option>
                        </select>
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Details of your Case / Career Goals *
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.message ? 'border-brand-red' : 'border-black/6 focus:border-brand-blue focus:bg-white'
                        } text-slate-800 text-sm focus:outline-none transition-all duration-300 resize-none`}
                        placeholder="Briefly describe what service or advice you are seeking..."
                        data-hover="true"
                        data-hover-type="blue"
                      />
                      {errors.message && (
                        <span className="text-[10px] text-brand-red font-semibold">{errors.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Magnetic range={25} strength={0.15} className="w-full mt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-brand-red hover:bg-brand-red/95 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_12px_rgba(185,28,28,0.15)] hover:scale-[1.01] text-xs uppercase tracking-wider"
                        data-hover="true"
                        data-hover-type="invert"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting Case File...
                          </>
                        ) : (
                          <>
                            <Send size={15} className="stroke-[2.5]" />
                            Submit Intake Form
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center text-center p-6"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 animate-bounce">
                      <CheckCircle2 size={36} className="stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 font-display">
                      Case Intake Successful
                    </h3>
                    <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-6">
                      Your files and request have been logged with the Clause & Effect LLP Secretariat. An advisor will contact you within 24 business hours with calendar invites.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-brand-blue hover:bg-brand-blue/95 text-white text-xs font-bold rounded-xl transition-all duration-200 uppercase tracking-wider shadow-sm"
                      data-hover="true"
                      data-hover-type="blue"
                    >
                      Submit Another Intake
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
