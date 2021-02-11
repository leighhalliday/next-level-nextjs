export default function Cta() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-cyan-900 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block">Get started today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-cyan-100">
                Whether you're a frontend or backend developer, this course has
                something for everyone. You'll learn new skills while building a
                fullstack application that will help you at your current job, or
                to get the next one.
              </p>
              <a
                href="https://courses.leighhalliday.com/next-level-next-js/buy"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-cyan-800 hover:bg-indigo-50"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://res.cloudinary.com/leighhalliday/image/upload/q_auto/dpr_auto/f_auto/Screen_Shot_2021-02-11_at_12.49.45_PM.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
