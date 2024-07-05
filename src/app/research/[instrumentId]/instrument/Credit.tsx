import { FormatValue } from "src/app/components/FormatValue";

import { InstrumentCredit } from "src/types";

type CreditProps = {
  data: InstrumentCredit;
};

export const Credit: React.FC<CreditProps> = (props) => {
    const { data } = props;

  return (
    <div className="flex flex-col w-1/2">
      <p className="mb-8 text-2xl font-light capitalize">credit ratings</p>
      <div className="grid grid-cols-1 grid-flow-rows gap-10">
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">s&p rating</p>
          <FormatValue data={data.sp_rating} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">s&p rating date</p>
          <FormatValue data={data.sp_rating_date} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">s&p credit watch</p>
          <FormatValue data={data.sp_creditwatch} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">s&p credit watch date</p>
          <FormatValue data={data.sp_creditwatch_date} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">s&p outlook</p>
          <FormatValue data={data.sp_outlook} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">s&p outlook date</p>
          <FormatValue data={data.sp_outlook_date} />
        </span>
      </div>
    </div>
  );
}
