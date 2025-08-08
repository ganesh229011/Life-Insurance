import 'animate.css';

const plans = [
  {
    name: "LIC Digi Term",
    description:
      "A pure protection plan with flexible payout options and online availability.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.5c4.69 0 8.5-2.61 8.5-5.83S16.69 9 12 9c-4.69 0-8.5 2.61-8.5 5.83s3.81 5.67 8.5 5.67z" />
      </svg>
    ),
  },
  {
    name: "LIC New Tech-Term",
    description:
      "Comprehensive term plan offering multiple riders and high cover at low premium.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12h-3v-3" />
      </svg>
    ),
  },
  {
    name: "LIC Jeevan Utsav",
    description:
      "Lifelong income plan with guaranteed annual payouts and life protection.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    name: "LIC Jeevan Umang",
    description:
      "Whole life plan combining annual survival benefits and maturity benefits.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4h10v4m-5-4v12" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    name: "LIC Navjeevan",
    description:
      "Endowment assurance plan offering savings and protection with flexible terms.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-yellow-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
      </svg>
    ),
  },
  {
    name: "LIC New Jeevan Shanti",
    description:
      "Single premium annuity plan providing guaranteed income after retirement.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-pink-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.5 0-2.75 1.2-2.75 2.7 0 1.11.8 2.02 1.8 2.46l-1.6 1.7h3.1v-4.3c0-.39-.19-.72-.46-.95" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-8" />
      </svg>
    ),
  },
  {
    name: "LIC's Jeevan Labh",
    description:
      "Limited premium, non-linked endowment plan offering life cover, savings, riders, tax benefits, and loan options.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-indigo-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-4-4v8" />
      </svg>
    ),
  },
];

export default function LICPlans() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-900 dark:text-white relative inline-block">
        <span className="underline decoration-blue-500 decoration-4">Life Insurance Plans</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map(({ name, description, icon }, index) => (
          <div
            key={name}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex-shrink-0">{icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{name}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
            <button
              type="button"
              className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
              onClick={() => alert(`More details for ${name} coming soon!`)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
