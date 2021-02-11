const videos = [
  [
    "Introduction and App Overview",
    "The first video starts by introducing the final app that we will be building and how the course works.",
  ],
  [
    "Requirements and Account Setup",
    "We use a number of popular services during the development of this app (Firebase, Vercel, Cloudinary, Mapbox), and we'll get them set up and configured here.",
  ],
  [
    "Setup and Initial Files",
    "Starter files are included so we're all on the same page and same version. In this video we get comfortable with the codebase and run `yarn install` for the first time.",
  ],
  [
    "Creating Layout Component and Navigation",
    "We build a reusable Layout component and how to navigate from one page to the next.",
  ],
  [
    "Initialize Firebase and Build Auth Provider",
    "Firebase handles authentication for us, and this in video we iniitalize our Firebase app along with building a custom Auth Provider so the rest of the app knows if the user is authenticated or not.",
  ],
  [
    "Create Auth Page and Add Restricted Route",
    "What good is auth if you can't log in? This video covers the authentication page, along with our first look at restricted routes using getServerSideProps from Next.js to limit access.",
  ],
  [
    "Render Mapbox Map on Home Page",
    "Time to get to the fun stuff! The goal of this video is to get Mapbox rendering on our home page.",
  ],
  [
    "Start Add House Form with react-hook-form",
    "The map is rendering, but there is no data! In this video we use react-hook-form to build an Add House form.",
  ],
  [
    "Add House Form Search with Google Places",
    "We use Google Places to search for an address and then convert its location into latitude and longitude, a requirement to display it on our map.",
  ],
  [
    "Finish Add House Form and Add Image Preview",
    "In this video we'll create the ability to add and preview the image in our house form, along with collecting the remaining fields and validating input.",
  ],
  [
    "Initialize Prisma and Create House Table",
    "We save our houses in Postgres, an extremely popular relational database. To interact with Postgres, we'll use Prisma. It will manage our database schema and allow us to read from and write to the DB.",
  ],
  [
    "Initialize GraphQL and Apollo Server",
    "Using Apollo Server and TypeGraphQL we will build the backend GraphQL API that our React frontend will interact with. Fully typed using TypeScript, it's a great code-first approach to defining our GraphQL Schema.",
  ],
  [
    "Initialize Apollo Client",
    "The backend is almost ready, but we need to initialize Apollo Client for our React code to be able to perform Queries and Mutations on our GraphQL API.",
  ],
  [
    "Upload Image to Cloudinary and our First Mutation",
    "This video covers how to securely upload an image from a form in React to Cloudinary, and we'll also create our first mutation along the way.",
  ],
  [
    "Build Create House Mutation",
    "We'll now create a mutation that will allow us to save a house in our database... everything has finally come together!",
  ],
  [
    "Create Show House Page and GraphQL Query",
    "We have houses in our database and its' time to query them and display them on the frontend.",
  ],
  [
    "Display House on Mapbox Map",
    "Here we build out the page that displays a single house's details along with its location on a second Mapbox map.",
  ],
  [
    "Query Nearby Houses and Render on Map",
    "Let's add the ability to query nearby houses, learning about bounding boxes and how to find houses that exist within that bounding box efficiently.",
  ],
  [
    "Custom Hook: Remember Map Location",
    "It's annoying to have to find your location on the map over and over again! Let's create a custom hook that will remember the map's location in the browsers local storage.",
  ],
  [
    "Track Map Bounds (Debounce)",
    "As the user moves the map around, it will re-query the houses that are currently within the map's bounding box. This can generate A LOT of queries, but using a debounce hook can limit the frequency that they'll request data from our backend.",
  ],
  [
    "Query Houses Within Bounds",
    "It's time to query the houses that are going to be displayed on the home page's map, using the debounced values from the previous video. We'll also add a new query to our GraphQL API in order to find them.",
  ],
  [
    "Display Houses on Map",
    "We have the houses and it's now time to display them on the map. We'll also add the ability to open an InfoWindow for each one.",
  ],
  [
    "Highlight House Being Hovered on Map",
    "There's a disconnect between the houses being listed on the left and the houses on the map on the right. This video connects them by storing state for which house is being hovered over, allowing us to highlight it on the map.",
  ],
  [
    "Add Google Places Search to Map",
    "Here we get to reuse the Google Places search created on our Add House Form, allowing the user to find their location easily on the map.",
  ],
  [
    "Create Edit House Page (Restricted Route)",
    "What good is adding homes if you can't edit them? Here we build the Edit House page which is a restricted route, and only available to the owner of the house.",
  ],
  [
    "Modify House Form to Enable Editing",
    "We're going to reuse the form we build to add a house, giving it the ability to edit a house as well.",
  ],
  [
    "Create and Call Delete House Mutation",
    "In this video we introduce a button that the house owner can click to delete a house... we'll need to create and call a new mutation to make this happen as well.",
  ],
  [
    "Deploy to Vercel",
    "Deployment time! Vercel makes it easy to deploy this fullstack application, and we cover how to set up the environment variables in this new environment.",
  ],
  [
    "Bonus! HttpOnly Auth Cookies",
    "Oops! We have some security issues. Let's convert our client side cookies into HttpOnly server side cookies, shielding our auth tokens from prying eyes.",
  ],
];

export default function Videos() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
          Video Overview
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          A complete fullstack app from start to finish
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Building an app is hard. What do you start with? What technologies do
          you use? Security? In this course we'll build a complete fullstack
          Next.js app from start to finish, introducing dependencies as needed,
          and explaining every step that we take.
        </p>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map(([title, desc]) => (
              <div className="pt-6" key={title}>
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
