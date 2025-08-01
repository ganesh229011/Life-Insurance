export default function FAQ() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg">How do I pay my premium online?</h3>
          <p>Visit our website, log in to your account, and use the “Pay Premium” button under your policy.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Can I get a tax benefit on LIC policies?</h3>
          <p>Yes. LIC premiums are eligible for tax deductions under section 80C of the Income Tax Act.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">How do I file a claim?</h3>
          <p>Go to the claim assistance page, upload necessary documents, and our executive will contact you.</p>
        </div>
      </div>
    </main>
  );
}
