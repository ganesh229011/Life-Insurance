export default function About() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-900 dark:text-white relative inline-block">
        About LIC
        <span className="block w-20 h-1 bg-blue-600 rounded mt-2 mx-auto"></span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left side: icon or image */}
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-blue-600 dark:text-blue-400"
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M32 2c-7.18 0-13 5.82-13 13v14H13c-2.76 0-5 2.24-5 5v16c0 2.76 2.24 5 5 5h38c2.76 0 5-2.24 5-5V34c0-2.76-2.24-5-5-5h-6V15c0-7.18-5.82-13-13-13z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M32 29v10M22 39h20" />
          </svg>
        </div>

        {/* Right side: content */}
        <div className="text-gray-800 dark:text-gray-200 space-y-6 text-lg leading-relaxed">
          <p>
            The Life Insurance Corporation of India (LIC) was founded in 1956 with the mission to provide life insurance to every Indian citizen.
          </p>
          <p>
            Our vision is to enhance the quality of life of people through financial security by providing products and services of aspired attributes with competitive returns.
          </p>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-blue-700 dark:text-blue-400 max-w-md">
            “Securing your future with trust and commitment since 1956.”
          </blockquote>
        </div>
      </div>
    </main>
  );
}
