import React from 'react'
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-24">
        <div className="space-y-12 md:space-y-0 md:flex md:items-center md:gap-12">
          {/* Left Image */}
          <div className="md:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80"
              alt="Team working"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-7/12 space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-5xl">
              About Our Vision
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              We are a team of passionate developers, designers, and thinkers 
              committed to building powerful solutions that make communication 
              seamless, secure, and reliable. Our focus is on creating tools 
              that help people connect without limits. 
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              From enabling group connectivity to ensuring data privacy, 
              every feature is built with care. We believe technology 
              should empower people — whether they are connecting families, 
              friends, or teams spread across the globe. 
            </p>

            <div className="mt-6">
              <a
                href="#"
                className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-500 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}