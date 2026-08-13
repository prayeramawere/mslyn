import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="w-full flex justify-center py-10">
        <div className="w-[90%] rounded-md shadow-sm shadow-gray-600/25 md:px-15 px-7 py-14">
          <div className="text-sm md:w-[50%] md:px-12 px-3 py-7 gap-5">
            <h1 className="font-semibold text-tint-600 text-sm">ABOUT</h1>

            <h2 className="text-4xl font-bold mt-5">
              Homemade food, prepared with care for every occasion.
            </h2>

            <p className="mt-5 text-tint-600">
              Miss Lyn’s Kitchen is a Bulawayo-based food and catering business
              serving delicious traditional Zimbabwean and Western meals. Every
              event is different, so we work closely with our customers to
              create meals that suit their occasion, preferences, and guests.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex  justify-center items-center">
        <div className="w-[80%] flex flex-wrap md:flex-nowrap justify justify-between">
          <div className="w-[400px] px-7 py-4 text-sm">
            <h1 className="font-semibold"> Owner & Cook</h1>

            <p className="text-tint-600 mt-4">
              I love bringing people together through good food. At Miss Lyn’s
              Kitchen, every meal is prepared with care and passion, with the
              goal of making your special occasion memorable.
            </p>
          </div>
          <div className="w-full mt-5 md:mt-0 flex justify-center flex-wrap items-center">
            <h1 className="text-2xl font-mono w-full text-center">
              Planning an event?
            </h1>

            <Link
              href={
                "https://wa.me/263779179996?text=Hello%20Miss%20Lyn's%20Kitchen,%20I%20would%20like%20to%20enquire%20about%20your%20catering%20services."
              }
            >
              <button className="bg-pink-600 text-sm rounded-full px-6 py-4 mt-7 text-white">
                Enquire About Catering
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
