import ItemComponent from "@/app/components/ItemComponent";
import Link from "next/link";

const page = () => {
  type itemProps = {
    itemNumber: string;
    imageUrl: string;
  };
  const items = [
    {
      itemNumber: "01",
      imageUrl: "img8.jpg",
    },
    {
      itemNumber: "02",
      imageUrl: "img10.jpg",
    },
    {
      itemNumber: "03",
      imageUrl: "img11.jpg",
    },
    {
      itemNumber: "04",
      imageUrl: "img7.jpg",
    },
    {
      itemNumber: "05",
      imageUrl: "img1.jpg",
    },
    {
      itemNumber: "06",
      imageUrl: "img2.jpg",
    },
    {
      itemNumber: "07",
      imageUrl: "img3.jpg",
    },
    {
      itemNumber: "08",
      imageUrl: "img4.jpg",
    },
    {
      itemNumber: "09",
      imageUrl: "img5.jpg",
    },
    {
      itemNumber: "10",
      imageUrl: "img6.jpg",
    },
  ];

  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] mt-10 pb-4 border-l  flex flex-wrap justify-center items-center border-gray-600/25 px-4">
          {items.map((item: itemProps, index: number) => (
            <ItemComponent
              key={index}
              itemNumber={item.itemNumber}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
