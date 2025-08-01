export default function Compare() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Compare Insurance Plans</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="p-3">Plan</th>
              <th className="p-3">Type</th>
              <th className="p-3">Benefits</th>
              <th className="p-3">Min. Sum Assured</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300 dark:border-gray-700">
              <td className="p-3">LIC Tech-Term</td>
              <td className="p-3">Term Plan</td>
              <td className="p-3">Death benefit, low premium</td>
              <td className="p-3">₹50,000</td>
            </tr>
            <tr className="border-t border-gray-300 dark:border-gray-700">
              <td className="p-3">LIC Jeevan Utsav</td>
              <td className="p-3">Endowment Plan</td>
              <td className="p-3">Survival benefit + income</td>
              <td className="p-3">₹1,00,000</td>
            </tr>
            <tr className="border-t border-gray-300 dark:border-gray-700">
              <td className="p-3">LIC Cancer Cover</td>
              <td className="p-3">Health Plan</td>
              <td className="p-3">Cancer treatment cover</td>
              <td className="p-3">₹10,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
