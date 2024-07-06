import Link from "next/link";

import { FormatValue } from "./FormatValue";

import { Instrument } from "src/types";

type InstrumentListProps = {
  data: Instrument[];
};

export const InstrumentList: React.FC<InstrumentListProps> = (props) => {
  const { data } = props;

  const InstrumentList = data.map((instrument, index) => (
    <InstrumentInfo key={index} data={instrument} />
  ));

  return (
    <div data-test-id="instruments" className="grid grid-cols-3 grid-flow-rows gap-10">
      {InstrumentList}
    </div>
  );
};

type InstrumentInfoProps = {
  data: Instrument;
}

const InstrumentInfo: React.FC<InstrumentInfoProps> = (props) => {
  const { data } = props;

  return (
    <Link href={`/research/${data.cusip}`}>
      <div className="flex flex-col bg-white rounded-lg shadow-md p-8 cursor-pointer hover:shadow-xl">
        <p className="text-black font-medium text-lg mb-4">
          {data.description_short}
        </p>
        <div className="flex flex-row justify-between text-normal">
          <span className="flex flex-col mr-4">
            <p className="text-[#707070] font-light capitalize">price</p>
            <FormatValue
              prepend="$"
              data={new Intl.NumberFormat("us")
                .format(data.close_price as number)
                .toString()}
            />
          </span>
          <span className="flex flex-col mr-4">
            <p className="text-[#707070] font-light uppercase">ytw</p>
            <FormatValue data={data.close_ytw} append="%" />
          </span>
          <span className="flex flex-col mr-4">
            <p className="text-[#707070] font-light capitalize">tenor</p>
            <FormatValue data={data.maturity_date} />
          </span>
          <span className="flex flex-col mr-4">
            <p className="text-[#707070] font-light capitalize">s&p rating</p>
            <FormatValue data={data.sp_rating} />
          </span>
        </div>
      </div>
    </Link>
  );
};
