import React from "react";

interface Props {
  data?: any | undefined;
}

// test

export default function Section({ data }: Props) {
  function description(item: any) {
    let body = item.slug.body.children[0].children[0].text;
    return body;
  }

  const itemType = data.map((item: any) => item.slug.type);

  //   console.log(itemType);
  //   console.log(
  //     data.map((item: any) => item.slug.body.children[0].children[0].text)
  //   );

  const Card = ({ item, index }: any) => {
    return (
      <div
        key={index}
        className="h-full w-full flex gap-2 justify-center items-end"
      >
        <div className="">
          <h1 className="font-bold text-xl leading-none max-w-[28ch]">
            {item.slug.title}
          </h1>
          <p className="font-light text-sm">{description(item)}</p>
        </div>

        <div className="flex-1 flex gap-1 justify-center items-end">
          <div className="h-1 mb-1 w-full border-b-2 border-dotted border-dark"></div>
          <p>${item.slug.price}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="space-y-20">
      <div className="max-w-6xl m-auto space-y-12">
        <h2 className="text-5xl font-bold">Appetizers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-12 w-full px-8 lg:place-items-center">
          {data
            .filter((item: any) => item.slug.type.toLowerCase() === "appetizer")
            .map((item: any, index: number) => (
              <Card item={item} key={index} />
            ))}
        </div>
      </div>
      <div className="max-w-6xl m-auto space-y-12">
        <h2 className="text-5xl font-bold">Entrees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-12 w-full px-8 lg:place-items-center">
          {data
            .filter((item: any) => item.slug.type.toLowerCase() === "entree")
            .map((item: any, index: number) => (
              <Card item={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
