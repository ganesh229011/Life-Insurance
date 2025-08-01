export default function Home() {
  return (
    <>
      {/* Video Banner */}
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

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-100 to-blue-300">
        <h2 className="text-4xl font-bold mb-4">Secure Your Future with LIC</h2>
        <p className="text-lg mb-6">India's Most Trusted Life Insurance Provider Since 1956</p>
        <a href="/buy" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-900">
          Get Started
        </a>
      </section>

      {/* Popular Plans Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Popular Plans</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Jeevan Utsav */}
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <img src="/jeevan-utsav.png" alt="Jeevan Utsav" className="mx-auto mb-4 rounded" />
            <h4 className="font-semibold text-xl">Jeevan Utsav</h4>
            <p className="text-sm mt-2">
              LIC’s Jeevan Utsav is a lifelong income and protection plan that offers guaranteed annual income...
            </p>
          </div>

          {/* New Tech Term */}
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <img src="/newtechterm.jpg" alt="New Tech Term" className="mx-auto mb-4 rounded" />
            <h4 className="font-semibold text-xl">New Tech Term</h4>
            <p className="text-sm mt-2">
              LIC’s New Tech-Term Plan is a pure life insurance term plan offering affordable premiums, high coverage...
            </p>
          </div>

          {/* Cancer Cover */}
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <img src="/cancercover.jpg" alt="Cancer Cover" className="mx-auto mb-4 rounded" />
            <h4 className="font-semibold text-xl">Cancer Cover</h4>
            <p className="text-sm mt-2">
              LIC’s Cancer Cover is a specialized health insurance plan designed to offer financial protection...
            </p>
          </div>

          {/* LIC's Jeevan Labh */}
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <img src="/jeevan-labh.jpg" alt="LIC's Jeevan Labh" className="mx-auto mb-4 rounded" />
            <h4 className="font-semibold text-xl">LIC's Jeevan Labh</h4>
            <p className="text-sm mt-2">
              LIC’s Jeevan Labh (Plan No. 936) is a non-linked, with-profits endowment plan...
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Contact Us - Pimpri */}
          <div>
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <h3 className="text-lg font-semibold mb-2">Pimpri</h3>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M493.4 24.6l-104-24c-11.4-2.6-23.2 2.1-30.2 11.8l-48 64c-6.4 8.5-8.2 19.8-4.7 29.9l24 72c-54.8 25.4-115.3 86-140.8 140.8l-72-24c-10.1-3.5-21.4-1.7-29.9 4.7l-64 48c-9.7 7-14.4 18.8-11.8 30.2l24 104c2.6 11.4 12.8 19.5 24.4 19.5 256.1 0 464-207.9 464-464 0-11.6-8.1-21.8-19.5-24.4z"/>
                </svg>
                96111112225
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 384 512">
                  <path d="M168 0C75.3 0 0 75.3 0 168c0 87.9 127.8 285.6 154.1 323.7 9.7 13.4 29.1 13.4 38.8 0C256.2 453.6 384 255.9 384 168 384 75.3 308.7 0 216 0h-48zM192 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
                </svg>
                Telco Ground, Ajmera, Masulkar Colony 411018
              </li>
            </ul>
          </div>

          {/* Krushna Nagar */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Krushna Nagar</h3>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M493.4 24.6l-104-24c-11.4-2.6-23.2 2.1-30.2 11.8l-48 64c-6.4 8.5-8.2 19.8-4.7 29.9l24 72c-54.8 25.4-115.3 86-140.8 140.8l-72-24c-10.1-3.5-21.4-1.7-29.9 4.7l-64 48c-9.7 7-14.4 18.8-11.8 30.2l24 104c2.6 11.4 12.8 19.5 24.4 19.5 256.1 0 464-207.9 464-464 0-11.6-8.1-21.8-19.5-24.4z"/>
                </svg>
                80000044557
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 384 512">
                  <path d="M168 0C75.3 0 0 75.3 0 168c0 87.9 127.8 285.6 154.1 323.7 9.7 13.4 29.1 13.4 38.8 0C256.2 453.6 384 255.9 384 168 384 75.3 308.7 0 216 0h-48zM192 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
                </svg>
                Krushna Nagar 411018
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/aryans" className="hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.28 0 268.91 0c-73.14 0-121.14 44.38-121.14 124.72v70.62H86.4V288h61.37v224h92.66V288z"/>
                </svg>
              </a>
              <a href="#gmail" className="hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M502.3 190.8L327.4 338.4c-14.1 11.7-33.8 11.7-47.9 0L9.7 190.8C3.9 186.5 0 179.6 0 172.2V464c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V172.2c0 7.4-3.9 14.3-9.7 18.6zM256 320L480 160H32l224 160z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/" className="hover:text-fuchsia-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M224 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 190c-41.3 0-75-33.7-75-75s33.7-75 75-75 75 33.7 75 75-33.7 75-75 75zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.2-36.2-93.5s-57.8-34.5-93.5-36.2c-37-2.1-147.9-2.1-184.9 0-35.7 1.7-67.2 9.9-93.5 36.2S2.9 128.2 1.2 164.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.7 9.9 67.2 36.2 93.5s57.8 34.5 93.5 36.2c37 2.1 147.9 2.1 184.9 0 35.7-1.7 67.2-9.9 93.5-36.2s34.5-57.8 36.2-93.5c2.1-37 2.1-147.9 0-184.9z"/>
                </svg>
              </a>
              <a href="https://wa.me/965555255528?text=Hi%2C%20can%20I%20get%20more%20info" className="hover:text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 224.1 32 103.6 32 8 127.5 8 248c0 43.9 11.6 86.5 33.6 123.8L0 480l112.8-41.2c35 19.1 74.5 29.2 114.5 29.2h.1c120.5 0 216-95.5 216-216 0-59-23-114.8-64-155.9zM224.1 438.6c-35.6 0-70.5-9.6-101.4-27.7l-7.2-4.3-66.9 24.4 17.4-68.5-4.4-7c-20.7-31.7-31.6-68.3-31.6-106.6 0-106.2 86.4-192.6 192.6-192.6 51.4 0 99.7 20 136.4 56.4 36.4 36.4 56.5 84.8 56.5 136.4-.1 106.2-86.5 192.6-192.6 192.6zm101.6-138.1c-5.5-2.7-32.7-16.1-37.7-18-5.1-1.9-8.8-2.7-12.5 2.7s-14.3 18-17.6 21.7-6.5 4.1-12 1.4-23.4-8.6-44.5-27.3c-16.4-14.6-27.4-32.7-30.6-38.1s-.3-8.5 2.4-11.2c2.5-2.5 5.5-6.5 8.2-9.7 2.7-3.2 3.6-5.4 5.5-9 1.8-3.6.9-6.8-.5-9.5s-12.5-30-17.1-41.3c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.8-.2-10.4-.2-3.6 0-9.5 1.4-14.5 6.8s-18.9 18.5-18.9 44.9 19.4 51.9 22.1 55.5 38.2 58.3 92.5 82.1c12.9 5.6 22.9 9.3 31.4 8.4 12.5 1.9 23.2.9 31.8-1.4s32.4-15.9 37-25.2c4.6-9.4 4.6-17.1 3.2-18.8s-5.1-2.5-10.6-5.2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500">
          &copy; 2025 LIC India. All rights reserved.
        </div>
      </footer>
    </>
  );
}
