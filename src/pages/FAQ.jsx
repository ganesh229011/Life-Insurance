import { useState } from "react";

const FAQs = [
  {
    question: "How do I pay my premium online?",
    answer:
      "Visit our website, log in to your account, and use the “Pay Premium” button under your policy.",
  },
  {
    question: "Can I get a tax benefit on LIC policies?",
    answer:
      "Yes. LIC premiums are eligible for tax deductions under section 80C of the Income Tax Act.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "Go to the claim assistance page, upload necessary documents, and our executive will contact you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleIndex(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-900 dark:text-white">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        {FAQs.map(({ question, answer }, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              {question}
              <svg
                className={`w-6 h-6 ml-4 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                } text-blue-600`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openIndex === index ? "max-h-screen py-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 dark:text-gray-300">{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
