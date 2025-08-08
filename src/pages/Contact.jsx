import { useState } from "react";

export default function Contact() {
  const [showThanks, setShowThanks] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowThanks(true);
  }

  return (
    <main className="max-w-4xl mx-auto py-16 px-6 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-900 dark:text-white relative inline-block">
        Contact Us
        <span className="block w-24 h-1 bg-blue-600 rounded mt-2 mx-auto"></span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
        <div className="relative group">
          <input
            type="text"
            id="fullname"
            required
            placeholder="Full Name"
            className="peer w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
          />
          <label
            htmlFor="fullname"
            className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400 bg-white dark:bg-gray-900 px-1"
          >
            Full Name
          </label>
        </div>

        <div className="relative group">
          <input
            type="email"
            id="email"
            required
            placeholder="Email Address"
            className="peer w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400 bg-white dark:bg-gray-900 px-1"
          >
            Email Address
          </label>
        </div>

        <div className="relative group">
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Your Message"
            className="peer w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-lg resize-none bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400 bg-white dark:bg-gray-900 px-1"
          >
            Your Message
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>

      {showThanks && (
        <div className="mt-8 text-center text-green-600 text-lg font-semibold animate-fadeIn">
          ✅ Thank you for reaching out! We will get back to you shortly.
        </div>
      )}

      <div className="mt-12 text-center text-gray-700 dark:text-gray-300 space-y-2 text-lg font-medium">
        <p>
          <span role="img" aria-label="phone">
            📞
          </span>{" "}
          Toll-Free: <a href="tel:18004254567" className="underline hover:text-blue-700">1800-425-4567</a>
        </p>
        <p>
          <span role="img" aria-label="location">
            📍
          </span>{" "}
          Head Office: Mumbai, India
        </p>
      </div>
    </main>
  );
}
