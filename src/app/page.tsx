import { Button } from "src/app/components/ui/button";

async function getData() {
  // const res = await fetch(process.env.NEXT_PUBLIC_PAPER_API);

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  // return res.json();
}


export default function Page() {
  throw Error("error");

  return (
    <div className="w-11/12 h-full flex flex-col justify-center">
      <div className="h-full bg-red-600 flex justify-center items-center">
        <p className="uppercase text-4xl font-normal">home</p>
        {/* <Button>click me!</Button> */}
      </div>
    </div>
  );
}
