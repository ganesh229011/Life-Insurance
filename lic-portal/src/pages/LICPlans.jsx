export default function LICPlans() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Life Insurance Plans</h2>
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">LIC Digi Term</h3>
          <p>A pure protection plan with flexible payout options and online availability.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">LIC New Tech-Term</h3>
          <p>Comprehensive term plan offering multiple riders and high cover at low premium.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">LIC Jeevan Utsav</h3>
          <p>Lifelong income plan with guaranteed annual payouts and life protection.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">LIC Jeevan Umang</h3>
          <p>Whole life plan combining annual survival benefits and maturity benefits.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">LIC Navjeevan</h3>
          <p>Endowment assurance plan offering savings and protection with flexible terms.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">LIC New Jeevan Shanti</h3>
          <p>Single premium annuity plan providing guaranteed income after retirement.</p>
        </div>

        <div className="md:col-span-2 flex justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">LIC's Jeevan Labh</h3>
            <p>
              LIC’s Jeevan Labh (Plan No. 936) is a limited premium, non-linked endowment plan that offers both life cover and savings. Riders, tax benefits, and loan/surrender options are also available.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
