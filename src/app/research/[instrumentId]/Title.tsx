import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type TitleProps = {
  cusip: string;
};

export const Title: React.FC<TitleProps> = (props) => {
  const { cusip } = props;

  return (
    <span className="flex flex-row items-center my-4">
      <Link href="/">
        <span className="flex flex-row items-center text-[#838383] capitalize text-md font-normal">
          <ChevronLeft className="text-[#838383]" />
          <p className="mx-2">research</p>
        </span>
      </Link>

      <p>/</p>
      <p className="mx-2 text-black">{cusip}</p>
    </span>
  );
};
