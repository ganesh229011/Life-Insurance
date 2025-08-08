import 'animate.css';

const PLANS = [
  {
    icon: "/newtechterm.jpg",
    name: "LIC Tech-Term",
    type: "Term Plan",
    typeColor: "bg-blue-100 text-blue-700",
    benefits: "Death benefit, low premium",
    minSum: "₹50,000",
    sumColor: "bg-green-100 text-green-800"
  },
  {
    icon: "/jeevan-utsav.png",
    name: "LIC Jeevan Utsav",
    type: "Endowment Plan",
    typeColor: "bg-violet-100 text-violet-700",
    benefits: "Survival benefit + income",
    minSum: "₹1,00,000",
    sumColor: "bg-green-100 text-green-800"
  },
  {
    icon: "/cancercover.jpg",
    name: "LIC Cancer Cover",
    type: "Health Plan",
    typeColor: "bg-rose-100 text-rose-700",
    benefits: "Cancer treatment cover",
    minSum: "₹10,000",
    sumColor: "bg-green-100 text-green-800"
  }
];

export default function Compare() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4 flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-4xl mb-8 animate__animated animate__fadeInDown">
        <h2 className="text-3xl font-bold mb-2 text-center text-blue-900 dark:text-white">
          Compare Insurance Plans
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
          Find the right plan for your family’s future.
        </p>
      </div>
      <div className="overflow-x-auto w-full max-w-4xl rounded-2xl shadow-xl bg-white dark:bg-gray-900 animate__animated animate__fadeInUp">
        <table className="w-full table-auto border-separate border-spacing-0">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700 text-white rounded-t-2xl">
              <th className="p-4 text-left rounded-tl-2xl" scope="col">Plan</th>
              <th className="p-4 text-left" scope="col">Type</th>
              <th className="p-4 text-left" scope="col">Benefits</th>
              <th className="p-4 text-left rounded-tr-2xl" scope="col">Min. Sum Assured</th>
            </tr>
          </thead>
          <tbody>
            {PLANS.map((row, i) => (
              <tr
                key={row.name}
                className={
                  "transition-colors " +
                  (i % 2 === 0
                    ? "bg-blue-50 dark:bg-gray-800"
                    : "bg-white dark:bg-gray-900") +
                  " hover:bg-blue-100 hover:dark:bg-gray-800"
                }
              >
                {/* Plan cell with inline image */}
                <td className="p-4 flex items-center gap-3 min-w-[180px] font-medium">
                  <span
                    className="inline-block bg-white dark:bg-gray-700 rounded shadow-sm"
                    style={{
                      width: 38, height: 38, flex: 'none', overflow: 'hidden'
                    }}
                  >
                    <img
                      src={row.icon}
                      alt={row.name}
                      className="object-cover w-full h-full rounded"
                    />
                  </span>
                  <span className="text-blue-900 dark:text-white">{row.name}</span>
                </td>
                {/* Type chip */}
                <td className="p-4">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${row.typeColor}`}>
                    {row.type}
                  </span>
                </td>
                {/* Benefits */}
                <td className="p-4 text-gray-700 dark:text-gray-200">{row.benefits}</td>
                {/* Min. Sum Assured chip */}
                <td className="p-4">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${row.sumColor}`}>
                    {row.minSum}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        <span className="inline-block px-3 py-2 bg-blue-100 text-blue-700 rounded-full">
          Can’t decide? <a className="text-blue-700 underline font-bold" href="/buy">Request Personal Advice</a>
        </span>
      </div>
    </main>
  );
}
