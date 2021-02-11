import Link from "next/link";
import { useState } from "react";

export default function Faq() {
  const [tech, setTech] = useState("TypeScript");

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out on{" "}
              <a
                href="https://twitter.com/leighchalliday"
                className="font-medium text-cyan-600 hover:text-cyan-500"
              >
                Twitter
              </a>
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Who is this course for?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Any developer that has a little bit of experience with React.
                  It isn't an absolute beginner, never seen code before course,
                  but it doesn't assume you're some sort of absolute expert
                  developer.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How long will I have access to it?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Forever! Even if I move off of Podia for hosting at some
                  point, I'll figure out a way to get you access to the content.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What will I learn?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  You're going to learn how to build a complete application. We
                  don't skip anything. We start with a blank canvas (other than
                  some packages installed so we're all on the same version), and
                  build absolutely every page. You'll learn how to set up a
                  database, a GraphQL API, authentication, how to deploy it,
                  etc... After this course you can build your own app! You can
                  bring your own ideas to life. Or you can apply to that dream
                  job you've been eyeing.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Does it come with support?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes! We have a{" "}
                  <a
                    href="https://discord.gg/wcSNwfu"
                    className="text-cyan-600 hover:text-cyan-500"
                  >
                    Discord channel
                  </a>{" "}
                  set up for this course where I'll be along with others taking
                  the course if you get stuck.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What technologies do we use?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Next.js, React, TypeScript, Hooks, Tailwind, Prisma, Postgres,
                  TypeGraphQL, Apollo Client, Apollo Server, Firebase Auth,
                  Mapbox, Google Places, Cloudinary, Vercel.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Purchasing Power Parity?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Head on over{" "}
                  <Link href="/ppp">
                    <a className="text-cyan-600 hover:text-cyan-500">here</a>
                  </Link>{" "}
                  to get access to a coupon code which will make this course
                  more affordable.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  But I don't know{" "}
                  <select
                    value={tech}
                    onChange={(e) => setTech(e.target.value)}
                  >
                    <option>TypeScript</option>
                    <option>Next.js</option>
                    <option>GraphQL</option>
                    <option>Apollo</option>
                    <option>Tailwind</option>
                    <option>Prisma</option>
                    <option>Firebase</option>
                    <option>Mapbox</option>
                  </select>
                  , will I be able to follow along?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes! As long as you've used React before, it should be fine. I
                  try to not assume knowledge about {tech}, we'll explain it as
                  we go. Stuck? Ask away in the Discord channel that's linked to
                  in the course.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
