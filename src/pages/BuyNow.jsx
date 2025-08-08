import { useState } from "react";

export default function BuyNow() {
  const [showThanks, setShowThanks] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowThanks(true);
  }

  return (
    <main className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 px-2">
      <div className="max-w-md w-full">
        <div className="animate__animated animate__fadeInDown bg-white dark:bg-gray-900 p-8 pt-6 rounded-2xl shadow-2xl border border-blue-200 dark:border-gray-700 transition-all">
          <div className="flex flex-col items-center mb-6">
            <span className="bg-blue-700 text-white p-3 rounded-full mb-2 shadow-lg">
              {/* Shopping cart icon */}
              <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.344 2.06a16.979 16.979 0 003.231 7.204c.47.636 1.042 1.233 1.69 1.783l1.035.88a1.979 1.979 0 002.4 0l1.035-.88c.648-.55 1.22-1.147 1.69-1.783a16.979 16.979 0 003.231-7.204L19 3H3z"/>
                <circle cx="12" cy="19" r="2" />
              </svg>
            </span>
            <h2 className="text-3xl font-extrabold text-blue-900 dark:text-white">Buy a LIC Plan</h2>
            <p className="text-blue-600 dark:text-gray-400 mt-1">Simple, fast &amp; secure</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="relative group">
              <input type="text" required id="fullname" className="peer w-full border px-3 py-3 pt-5 rounded-lg bg-blue-50 dark:bg-gray-800 focus:outline-none focus:ring focus:border-blue-400 placeholder-transparent" placeholder="Full Name" />
              <label htmlFor="fullname" className="absolute left-3 top-3 text-gray-500 text-sm transition-all pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs bg-white dark:bg-gray-900 px-1 peer-focus:text-blue-900 dark:peer-focus:text-white">Full Name</label>
            </div>
            
            {/* Email */}
            <div className="relative group">
              <input type="email" required id="email" className="peer w-full border px-3 py-3 pt-5 rounded-lg bg-blue-50 dark:bg-gray-800 focus:outline-none focus:ring focus:border-blue-400 placeholder-transparent" placeholder="Email Address" />
              <label htmlFor="email" className="absolute left-3 top-3 text-gray-500 text-sm transition-all pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs bg-white dark:bg-gray-900 px-1 peer-focus:text-blue-900 dark:peer-focus:text-white">Email Address</label>
            </div>
            
            {/* Mobile */}
            <div className="relative group">
              <input type="tel" required id="mobile" pattern="[0-9]{10,}" className="peer w-full border px-3 py-3 pt-5 rounded-lg bg-blue-50 dark:bg-gray-800 focus:outline-none focus:ring focus:border-blue-400 placeholder-transparent" placeholder="Mobile Number" />
              <label htmlFor="mobile" className="absolute left-3 top-3 text-gray-500 text-sm transition-all pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs bg-white dark:bg-gray-900 px-1 peer-focus:text-blue-900 dark:peer-focus:text-white">Mobile Number</label>
            </div>

            {/* Plan Select */}
            <div className="relative group">
              <select required className="w-full border px-3 py-3 rounded-lg bg-blue-50 dark:bg-gray-800 focus:outline-none focus:ring focus:border-blue-400 text-gray-700 dark:text-gray-100 appearance-none">
                <option value="">-- Select Plan --</option>
                <option value="tech-term">LIC Tech-Term</option>
                <option value="jeevan-utsav">LIC Jeevan Utsav</option>
                <option value="cancer-cover">LIC Cancer Cover</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="h-4 w-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 8l4 4 4-4" />
                </svg>
              </span>
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white w-full py-3 rounded-lg font-semibold shadow hover:bg-blue-900 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Proceed to Buy
            </button>
          </form>
          {showThanks && (
            <div className="flex flex-col items-center mt-8 animate__animated animate__fadeInUp">
              <span className="text-4xl mb-2">🎉</span>
              <span className="text-green-600 text-lg font-semibold">
                Thank you for purchasing your plan!
              </span>
              <span className="text-gray-500 mt-1 text-sm">
                A confirmation has been sent to your email.
              </span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
