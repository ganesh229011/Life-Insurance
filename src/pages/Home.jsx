import 'animate.css';

export default function Home() {
  return (
    <>
      {/* Video Banner (original, no overlay) */}
      <section className="w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-full max-h-[340px] object-contain"
        >
          <source src="/VID_20250709215521.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Hero Section with CTA & Ratings */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-100 to-blue-300 animate__animated animate__fadeInDown">
        <h2 className="text-4xl font-bold mb-4 tracking-tight font-display">
          Secure Your Future with LIC
        </h2>
        <p className="text-lg mb-6">
          India's Most Trusted Life Insurance Provider Since 1956
        </p>
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-2xl">★ ★ ★ ★ ★</span>
            <span className="ml-2 font-semibold text-blue-800">
              Rated 5/5 by 1,000+ Clients
            </span>
          </div>
          <span className="text-blue-800 mt-2">
            Trusted by 30 Crore+ Indians
          </span>
        </div>
        <a
          href="/buy"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-900 transition-transform transform hover:scale-110 font-semibold inline-flex gap-2 items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 7H7v6h6V7z" />
          </svg>
          Get Started
        </a>
      </section>

      {/* Popular Plans Section with Animated Cards */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h3 className="text-3xl font-bold text-center mb-10 animate__animated animate__fadeIn">
          Popular Plans
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Jeevan Utsav */}
          <div className="group bg-white rounded-xl shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl p-6 text-center border-t-4 border-blue-500 hover:border-blue-700 animate__animated animate__fadeInUp">
            <img src="/jeevan-utsav.png" alt="Jeevan Utsav" className="mx-auto mb-4 rounded-sm shadow group-hover:scale-105 transition-transform" />
            <h4 className="font-semibold text-xl mb-2">Jeevan Utsav</h4>
            <p className="text-gray-600 mb-4">Lifelong income, protection, and guaranteed payout...</p>
            <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Learn More</button>
          </div>
          {/* New Tech Term */}
          <div className="group bg-white rounded-xl shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl p-6 text-center border-t-4 border-blue-500 hover:border-blue-700 animate__animated animate__fadeInUp animate__delay-1s">
            <img src="/newtechterm.jpg" alt="New Tech Term" className="mx-auto mb-4 rounded-sm shadow group-hover:scale-105 transition-transform" />
            <h4 className="font-semibold text-xl mb-2">New Tech Term</h4>
            <p className="text-gray-600 mb-4">Affordable premium term plan with high coverage...</p>
            <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Learn More</button>
          </div>
          {/* Cancer Cover */}
          <div className="group bg-white rounded-xl shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl p-6 text-center border-t-4 border-blue-500 hover:border-blue-700 animate__animated animate__fadeInUp animate__delay-2s">
            <img src="/cancercover.jpg" alt="Cancer Cover" className="mx-auto mb-4 rounded-sm shadow group-hover:scale-105 transition-transform" />
            <h4 className="font-semibold text-xl mb-2">Cancer Cover</h4>
            <p className="text-gray-600 mb-4">Financial protection for cancer treatment and recovery...</p>
            <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Learn More</button>
          </div>
          {/* LIC's Jeevan Labh */}
          <div className="group bg-white rounded-xl shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl p-6 text-center border-t-4 border-blue-500 hover:border-blue-700 animate__animated animate__fadeInUp animate__delay-3s">
            <img src="/jeevan-labh.jpg" alt="LIC's Jeevan Labh" className="mx-auto mb-4 rounded-sm shadow group-hover:scale-105 transition-transform" />
            <h4 className="font-semibold text-xl mb-2">LIC's Jeevan Labh</h4>
            <p className="text-gray-600 mb-4">Non-linked, with-profits endowment plan with bonus...</p>
            <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Learn More</button>
          </div>
        </div>
        {/* Microinteraction Example: Years of Trust Counter */}
        <div className="text-center mt-10 text-xl font-bold text-blue-600 animate__animated animate__bounceIn">
          <span id="yearsOfTrust">69 Years of Trust!</span>
        </div>
      </section>

      {/* Footer remains unchanged */}
      <footer className="bg-gray-200 text-gray-700 p-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Us - Pimpri */}
          <div>
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <h3 className="text-lg font-semibold mb-2">Pimpri</h3>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start items-center">
                {/* Phone SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 512 512"><path d="M493.4 24.6l-104-24c-11.4-2.6-23.2 2.1-30.2 11.8l-48 64c-6.4 8.5-8.2 19.8-4.7 29.9l24 72c-54.8 25.4-115.3 86-140.8 140.8l-72-24c-10.1-3.5-21.4-1.7-29.9 4.7l-64 48c-9.7 7-14.4 18.8-11.8 30.2l24 104c2.6 11.4 12.8 19.5 24.4 19.5 256.1 0 464-207.9 464-464 0-11.6-8.1-21.8-19.5-24.4z"/></svg>
                96111112225
              </li>
              <li className="flex justify-center md:justify-start items-center">
                {/* Location SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 384 512"><path d="M168 0C75.3 0 0 75.3 0 168c0 87.9 127.8 285.6 154.1 323.7 9.7 13.4 29.1 13.4 38.8 0C256.2 453.6 384 255.9 384 168 384 75.3 308.7 0 216 0h-48zM192 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/></svg>
                Telco Ground, Ajmera, Masulkar Colony 411018
              </li>
            </ul>
          </div>
          {/* Krushna Nagar */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Krushna Nagar</h3>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start items-center">
                {/* Phone SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 512 512"><path d="M493.4 24.6l-104-24c-11.4-2.6-23.2 2.1-30.2 11.8l-48 64c-6.4 8.5-8.2 19.8-4.7 29.9l24 72c-54.8 25.4-115.3 86-140.8 140.8l-72-24c-10.1-3.5-21.4-1.7-29.9 4.7l-64 48c-9.7 7-14.4 18.8-11.8 30.2l24 104c2.6 11.4 12.8 19.5 24.4 19.5 256.1 0 464-207.9 464-464 0-11.6-8.1-21.8-19.5-24.4z"/></svg>
                80000044557
              </li>
              <li className="flex justify-center md:justify-start items-center">
                {/* Location SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 384 512"><path d="M168 0C75.3 0 0 75.3 0 168c0 87.9 127.8 285.6 154.1 323.7 9.7 13.4 29.1 13.4 38.8 0C256.2 453.6 384 255.9 384 168 384 75.3 308.7 0 216 0h-48zM192 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/></svg>
                Krushna Nagar 411018
              </li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* social SVG icons and links unchanged */}
              {/* ... */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; 2025 LIC India. All rights reserved.
        </div>
      </footer>
    </>
  );
}
