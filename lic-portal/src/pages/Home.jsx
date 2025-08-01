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
          className="w-full max-h-[340px] object-cover"
        >
          <source src="/VID_20250709215521.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-700">
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
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 text-center">
            <img
              src="/jeevan-utsav.png"
              alt="Jeevan Utsav"
              className="mx-auto mb-4 rounded"
            />
            <h4 className="font-semibold text-xl">Jeevan Utsav</h4>
            <p className="text-sm mt-2">
              LIC’s Jeevan Utsav is a lifelong income and protection plan with guaranteed annual income.
            </p>
          </div>

          {/* New Tech Term */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 text-center">
            <img
              src="/newtechterm.jpg"
              alt="New Tech Term"
              className="mx-auto mb-4 rounded"
            />
            <h4 className="font-semibold text-xl">New Tech Term</h4>
            <p className="text-sm mt-2">
              Pure life insurance term plan offering affordable premiums and high coverage.
            </p>
          </div>

          {/* Cancer Cover */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 text-center">
            <img
              src="/cancercover.jpg"
              alt="Cancer Cover"
              className="mx-auto mb-4 rounded"
            />
            <h4 className="font-semibold text-xl">Cancer Cover</h4>
            <p className="text-sm mt-2">
              Health insurance plan designed for cancer-related risks with lump sum payouts.
            </p>
          </div>

          {/* LIC's Jeevan Labh */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 text-center">
            <img
              src="/jeevan-labh.jpg"
              alt="LIC's Jeevan Labh"
              className="mx-auto mb-4 rounded"
            />
            <h4 className="font-semibold text-xl">LIC's Jeevan Labh</h4>
            <p className="text-sm mt-2">
              Limited premium, with-profits endowment plan offering savings and life cover.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
