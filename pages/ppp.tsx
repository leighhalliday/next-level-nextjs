import { GetServerSideProps } from "next";

interface IProps {
  coupon: string | null;
  discount: number;
  countryCode: string;
}

export default function Ppp({ coupon, discount, countryCode }: IProps) {
  if (!coupon) {
    return <div>No coupon.</div>;
  }

  return (
    <div
      className="flex flex-1 justify-center items-center bg-gradient-to-r from-teal-500 to-cyan-600"
      style={{ height: "100vh" }}
    >
      <div className="bg-cyan-50 w-full">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              <span className="block">
                Purchasing Power Parity ({countryCode})
              </span>
              <span className="block text-cyan-800">
                {discount}% off with coupon code {coupon}
              </span>
            </h2>
            <span>
              Not what you expected? Message me on{" "}
              <a
                className="text-cyan-800 font-bold"
                href="https://twitter.com/leighchalliday"
              >
                Twitter
              </a>
              .
            </span>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href={`https://courses.leighhalliday.com/next-level-next-js/buy?coupon=${coupon}`}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-800 hover:bg-cyan-900"
              >
                Let's Go!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const known: Record<string, number> = {
  US: 1,
  GB: 0.96,
  FR: 0.95,
  DE: 0.94,
  CA: 0.94,
  IT: 0.87,
  ES: 0.77,
  MX: 0.46,
  BR: 0.39,
  CO: 0.37,
  ID: 0.31,
  AR: 0.31,
  IN: 0.25,
};

interface IPPPResponse {
  ppp?: { pppConversionFactor?: number };
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const countryCode = (req.headers["cf-ipcountry"] as string | null) ?? "MX";
  let factor: number | undefined = known[countryCode];

  if (!factor || typeof factor === "undefined") {
    const response = await fetch(
      "https://api.purchasing-power-parity.com/?target=ID"
    );
    const data: IPPPResponse = await response.json();
    factor = data?.ppp?.pppConversionFactor ?? 1;
  }

  let coupon = null;
  let discount = 0;

  if (factor <= 0.4) {
    coupon = process.env.COUPON_LOW;
    discount = 75;
  } else if (factor <= 0.6) {
    coupon = process.env.COUPON_MID;
    discount = 50;
  } else if (factor <= 0.75) {
    coupon = process.env.COUPON_HIGH;
    discount = 25;
  }

  return { props: { coupon, discount, countryCode } };
};
