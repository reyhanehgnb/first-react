import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Eye, EyeOff } from "lucide-react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", password: "", message: "" });
    setShowPassword(false);
  };

  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row bg-gray-50 text-gray-900">
      {/* Left: Form */}
      <motion.div
        className="flex-1 flex flex-col justify-center px-8 py-5 lg:px-16"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-[var(--lightbrown)]">Contact Me</h1>
        <p className="text-gray-600 mb-4">
          Have a question or a project idea? Send me a message and I'll get back
          to you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1 text-[var(--darkbrown)]">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border rounded-2xl px-4 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1 text-[var(--darkbrown)]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full border rounded-2xl px-4 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block font-medium mb-1 text-[var(--darkbrown)]">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full border rounded-2xl px-4 py-1.5 pr-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500"
            >
              <AnimatePresence exitBeforeEnter>
                {showPassword ? (
                  <motion.div
                    key="eyeoff"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <EyeOff size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="eye"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Eye size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          <div>
            <label className="block font-medium mb-1 text-[var(--darkbrown)]">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="4"
              required
              className="w-full border rounded-2xl px-4 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-blue-600 text-white py-2.5 rounded-2xl font-semibold shadow hover:bg-blue-700 transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      <motion.div
        className="relative flex-1 flex flex-col justify-center items-center text-white bg-cover bg-center p-6 rounded-l-3xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80')",
        }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-l-3xl"></div>

        <div className="relative z-10 text-center space-y-6 max-w-md">
          <h2 className="text-3xl font-bold pb-2">Let's Connect</h2>
          <p className="text-gray-200 pb-60">
            I'm open to collaborations, freelance work, and creative projects.
          </p>

          <div className="space-y-6">
            <div className="flex items-start justify-center space-x-3 ">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>reyhanehghanbary793@email.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Qazvin, Iran</span>
            </div>
          </div>
          <div className="pb-1">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Reyhaneh. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
