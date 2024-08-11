import { Empty } from "src/app/components/FormatValue";
import { Button } from "./components/ui/Button";

import { formatDistance } from "date-fns";

type HeaderProps = {
  description: string;
  maturityDate: string;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const { maturityDate, description } = props;

  const tillMature = formatDistance(
    new Date(),
    new Date(maturityDate),
  );

  return (
    <div className="w-full flex flex-row justify-between items-center py-4 mb-8">
      <div className="flex flex-row items-center">
        <span className="text-[#707070] mr-8 font-normal">
          <p className="text-2xl text-black font-medium">{description}</p>
          <p className="font-light">{tillMature} to Maturity</p>
        </span>
        <span className="text-[#707070] mx-4 font-normal">
          <p className="font-light">Bid Price (YTW) x Min Qty</p>
          <Empty />
        </span>
        <span className="h-14 w-0.5 bg-gray-300"></span>
        <span className="text-[#707070] mx-4 font-normal">
          <p className="font-light">Ask Price (YTW) x Min Qty</p>
          <Empty />
        </span>
      </div>
      <Button
        className="bg-black/50 text-white rounded-lg capitalize py-3 px-14 cursor-not-allowed"
        disabled
      >
        trade
      </Button>
    </div>
  );
};
