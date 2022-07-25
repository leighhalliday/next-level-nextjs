import Link from "next/link";

export default function Pricing() {
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Next Level Next.js
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Take your career to the next level with the latest technologies.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Premium Fullstack Course
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  Tutorials are great, but you learn the most by building a
                  complete application, both frontend and backend. This course
                  will give you the skills needed to work across the stack and
                  build your own apps from start to finish.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-cyan-800">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200"></div>
                  </div>
                  <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-cyan-800"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        All 29 HD streaming videos
                      </p>
                    </li>

                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-cyan-800"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        Course Discord channel (happy to help)
                      </p>
                    </li>

                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-cyan-800"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        Commits for each video (never get lost)
                      </p>
                    </li>

                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-cyan-800"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        8+ hours of content
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  Pay once, own it forever
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>$FREE</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">
                    USD
                  </span>
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="https://www.youtube.com/playlist?list=PL8fumNHsC-3PNJpiIa6Sm84yEo_Y0c7O_"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Get Access
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
