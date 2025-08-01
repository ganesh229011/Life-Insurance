import { useState } from "react";

export default function BuyNow() {
  const [showThanks, setShowThanks] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowThanks(true);
  }

  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Buy a LIC Plan</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <input type="text" placeholder="Full Name" required className="w-full p-2 border rounded dark:bg-gray-700" />
        <input type="email" placeholder="Email Address" required className="w-full p-2 border rounded dark:bg-gray-700" />
        <input type="tel" placeholder="Mobile Number" required className="w-full p-2 border rounded dark:bg-gray-700" />
        <select className="w-full p-2 border rounded dark:bg-gray-700" required>
          <option value="">-- Select Plan --</option>
          <option value="tech-term">LIC Tech-Term</option>
          <option value="jeevan-utsav">LIC Jeevan Utsav</option>
          <option value="cancer-cover">LIC Cancer Cover</option>
        </select>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900">Proceed to Buy</button>
      </form>

      {showThanks && (
        <div className="text-center text-green-600 mt-6 text-lg font-medium">
          ✅ Thank you for purchasing your plan! A confirmation has been sent to your email.
        </div>
      )}
    </main>
  );
}
