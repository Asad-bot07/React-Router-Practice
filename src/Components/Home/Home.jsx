import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-xl sm:mx-16 mx-4 sm:py-24 py-16 overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center justify-between">
          {/* Left Text Content */}
          <div className="sm:max-w-lg max-w-md text-center sm:text-left space-y-6">
            <h1 className="text-4xl font-extrabold sm:text-6xl leading-tight">
              Stay Connected,  
              <span className="block text-yellow-200">Anytime. Anywhere.</span>
            </h1>
            <p className="text-lg sm:text-xl text-orange-100">
              Experience seamless communication with our app.  
              Download now and bring your team, friends, and family closer together.
            </p>

            <div className="flex justify-center sm:justify-start gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-orange-700 bg-white rounded-lg hover:bg-gray-100 transition"
              >
                <svg
                  fill="currentColor"
                  width="22"
                  height="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                Download App
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold border-2 border-white rounded-lg hover:bg-white hover:text-orange-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="mb-10 sm:mb-0">
            <img
              className="w-80 sm:w-[420px] rounded-2xl shadow-2xl"
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
              alt="App Preview"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:px-16 px-6 grid sm:grid-cols-3 gap-10 text-center">
        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
            alt="Call Feature"
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="text-xl font-bold mt-6">Crystal Clear Calls</h3>
          <p className="text-gray-600 mt-2">
            Enjoy high-quality audio calls even in low connectivity areas.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80"
            alt="Group Feature"
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="text-xl font-bold mt-6">Group Connectivity</h3>
          <p className="text-gray-600 mt-2">
            Connect with up to 40 people in a single conference call.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80"
            alt="Secure Feature"
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="text-xl font-bold mt-6">Secure & Reliable</h3>
          <p className="text-gray-600 mt-2">
            Built with top-notch security to keep your conversations private.
          </p>
        </div>
      </section>

      {/* Footer Tagline */}
      <h2 className="text-center text-3xl sm:text-5xl font-extrabold py-10 text-gray-800">
        Redefining Communication for Everyone
      </h2>
    </div>
  );
}
