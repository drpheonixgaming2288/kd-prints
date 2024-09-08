"use client";
import Image from "next/image";
import Link from "next/link";
import { PenTool, Mail, Phone, Box } from "lucide-react";
import { motion } from "framer-motion";
import LOGO from "./img/kd-logo.jpg";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      {/* <header className="bg-black shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">KDPrints</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#services" className="hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-blue-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}

      <main>
        {/* Hero Section with background image and blur */}
        <section className="relative text-white py-20 overflow-hidden">
          {/* Background image with blur */}
          <div className="absolute inset-0 bg-[url(/bg.webp)] bg-no-repeat bg-cover bg-center bg-fixed"></div>

          {/* Overlay for darkening the background */}
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

          {/* Hero Content */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4">Welcome to KDPrints</h1>
            <p className="text-xl mb-8">
              Your one-stop shop for 3D printed trinkets and custom creations
            </p>
            <Link href="#contact" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-lg hover:shadow-2xl transition duration-300"
              >
                Bring Your Ideas to Life
              </motion.button>
            </Link>
          </motion.div>
        </section>

        {/* Featured Products */}
        {/* <section id="products" className="py-16 bg-gray-100 text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-4 rounded-lg shadow-md">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Product ${item}`}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold mb-2">Product {item}</h3>
                  <p className="text-sm text-gray-600">
                    A brief description of the product.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* About Us */}
        <section id="about" className="py-16 bg-white text-black">
          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h2 className="text-3xl font-bold text-center mb-8">
              About KDPrints
            </motion.h2>
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image
                src={LOGO}
                alt="Dylan and Korbin"
                width={300}
                height={300}
                className="rounded-sm w-64 h-64 object-cover"
              />
              <motion.div
                className="max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.p className="mb-4">
                  KDPrints was founded by Dylan Rogers and Korbin Coffelt, two
                  friends passionate about 3D printing technology and its
                  potential to create unique, useful items.
                </motion.p>
                <motion.p>
                  Our mission is to provide high-quality 3D printed products and
                  custom solutions to our customers, bringing creativity and
                  functionality together.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 bg-gray-100 text-black">
          <motion.div
            className="container mx-auto max-w-md px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            <ContactForm />
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-black text-white py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto text-center">
          <p>&copy; 2024 KDPrints. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}
