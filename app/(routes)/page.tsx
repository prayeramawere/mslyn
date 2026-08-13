import Image from "next/image";
import Link from "next/link";
import ItemComponent from "../components/ItemComponent";
import Value from "../components/Value";

export default function Home() {
  type itemProps = {
    itemNumber: string;
    imageUrl: string;
  };
  const items = [
    {
      itemNumber: "01",
      imageUrl: "img7.jpg",
    },
    {
      itemNumber: "02",
      imageUrl: "img10.jpg",
    },
    {
      itemNumber: "03",
      imageUrl: "img11.jpg",
    },
  ];

  type ValueProps = {
    topic: string;
    description: string;
  };

  const value = [
    {
      topic: "Authentic Zimbabwean Flavours",
      description:
        "Enjoy homemade traditional Zimbabwean dishes prepared with the familiar flavours and care that make every meal feel like home.",
    },
    {
      topic: "Western & Traditional Cuisine",
      description:
        "From traditional favourites to Western dishes, our catering is tailored to suit the occasion, your guests, and your preferences.",
    },
    {
      topic: "Catering Made For Your Event",
      description:
        "Every event is different, so we work with you to create meals that fit your occasion, whether it’s a celebration, gathering, or special event.",
    },
  ];
  return (
    <div className="">
      <div className="grid items-center md:grid-cols-2 w-full pt-8">
        <div className="bg-black rounded-md h-[420px] mt-5 mx-2 image"></div>

        <div className="md:px-25 px-7 pt-10 pb-7">
          <span className="inline-flex items-center text-tint-600 px-3 py-2 rounded-full text-sm font-semibold border  border-pink-600/75">
            Homemade. Authentic. Delicious.
          </span>

          <h1 className="text-3xl font-bold font-sans mt-7">
            Homemade meals, made for your special moments.
          </h1>

          <p className="mt-3 text-tint-600">
            At Miss Lyn’s Kitchen, we prepare delicious traditional Zimbabwean
            and Western meals tailored to your event and your guests. Whether
            you’re planning a celebration, gathering, or special occasion, we’re
            here to make the food one less thing to worry about.
          </p>

          <div className="text-sm mt-7 font-mono">
            Traditional | Western | Homemade | Catering
          </div>

          <div>
            <Link
              href={
                "https://wa.me/263779179996?text=Hello%20Miss%20Lyn's%20Kitchen,%20I%20would%20like%20to%20enquire%20about%20your%20catering%20services."
              }
            >
              <button className="bg-pink-600 text-sm rounded-full px-5 py-3 mt-7 text-white">
                Book Catering
              </button>
            </Link>

            <Link href={"/gallery"}>
              <button className="px-5 ml-5 py-3 hover:border font-bold border-pink-600/25 rounded-full text-sm">
                View Gallery
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:px-15 md:pt-8 px-2 pt-3 inline-flex flex-wrap items-center justify-center mt-10">
        <div className="md:w-[80%] w-full  flex justify-between px-3">
          <span className="font-semibold font-mono  uppercase"> Highlight</span>
          <Link href={"/gallery"}>
            <span className="text-sm">view more</span>
          </Link>
        </div>
        <div className="md:w-[85%] w-full mt-10 pb-4 border-l flex flex-wrap justify-center items-center  border-gray-600/25 px-2">
          {items.map((item: itemProps, index: number) => (
            <ItemComponent
              key={index}
              itemNumber={item.itemNumber}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex bg-black/3 justify-center items-center flex-wrap mt-15">
        <div className="w-[70%] md:px-10 px-3">
          <h1 className="text-xl px-4 py-2 font-sans font-semibold">
            We value you
          </h1>
        </div>
        <div className="w-[80%] md:px-15 px-3 py-3 grid md:grid-cols-3 gap-8 justify-center items-center">
          {value.map((value: ValueProps, index: number) => (
            <Value
              key={index}
              topic={value.topic}
              description={value.description}
            />
          ))}
        </div>
      </div>
      <div className="w-full  h-[300px] grid justify-center items-center ">
        <div className="flex flex-wrap items-center justify-center">
          <h1 className="text-2xl font-mono w-full text-center">
            Planning an event? Let us take care of the food.
          </h1>

          <div className="w-full flex flex-wrap justify-center items-center">
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
}
