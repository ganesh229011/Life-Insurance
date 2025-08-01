export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" required className="w-full p-2 border rounded dark:bg-gray-700" />
        <input type="email" placeholder="Email Address" required className="w-full p-2 border rounded dark:bg-gray-700" />
        <textarea placeholder="Your Message" required className="w-full p-2 border rounded dark:bg-gray-700"></textarea>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900">
          Send Message
        </button>
      </form>
      <div className="mt-6">
        <p>📞 Toll-Free: 1800-425-4567</p>
        <p>📍 Head Office: Mumbai, India</p>
      </div>
    </main>
  );
}
