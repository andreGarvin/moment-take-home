import { FormatValue } from "src/app/components/FormatValue";

import { Chart } from "./Chart";

import { Instrument } from "src/types";

type SummaryProps = {
  data: Instrument;
};

export const Summary: React.FC<SummaryProps> = (props) => {
  const { data } = props;

  const couponDate = data.next_coupon_date || data.last_coupon_date;

  return (
    <div className="w-full flex flex-row mb-14">
      <div className="flex flex-col w-1/2">
        <p className="mb-8 text-2xl font-light capitalize">
          about {data.description_short}
        </p>
        <div className="grid grid-rows-5 grid-flow-col gap-8">
          <span className="flex flex-col items-start font-light capitalize">
            <p className="mb-2 text-[#707070] capitalize">CUSIP</p>
            <FormatValue data={data.cusip} />
          </span>
          <span className="flex flex-col items-start font-light capitalize">
            <p className="mb-2 text-[#707070] capitalize">issuer</p>
            <FormatValue data={data.issuer} />
          </span>
          <span className="flex flex-col items-start font-light capitalize">
            <p className="mb-2 text-[#707070] capitalize">sub type</p>
            <FormatValue data={data.treasury_subtype} />
          </span>
          <span className="flex flex-col items-start font-light capitalize">
            <p className="mb-2 text-[#707070] capitalize">coupon rate</p>
            <FormatValue data={(0).toFixed(2)} append="%" />
          </span>
          <span className="flex flex-col items-start font-light capitalize">
            <p className="mb-2 text-[#707070] capitalize">maturity date</p>
            <FormatValue data={data.maturity_date} />
          </span>
          <span className="flex flex-col items-start mr-24 font-light capitalize">
            <p className="mb-2 text-[#707070] capitalize">ISIN</p>
            <FormatValue data={data.isin} />
          </span>
          <span className="flex flex-col items-start font-light capitalize">
            <p className="mb-2 text-[#707070] capitalize">type</p>
            <FormatValue data={data.type} />
          </span>
          <span className="flex flex-col items-start font-light capitalize">
            <p className="mb-2 text-[#707070] capitalize">coupon type</p>
            <FormatValue data={data.coupon_type} />
          </span>
          <span className="flex flex-col items-start font-light capitalize">
            <p className="mb-2 text-[#707070] capitalize">coupon date</p>
            <FormatValue data={couponDate} />
          </span>
          <span className="flex flex-col items-start font-light capitalize">
            <p className="mb-2 text-[#707070] capitalize">par value</p>
            <FormatValue
              prepend="$"
              data={new Intl.NumberFormat("us")
                .format(data.par_value as number)
                .toString()}
            />
          </span>
        </div>
      </div>
      <div className="w-3/4">
        <Chart instrumentId={data.cusip as string} />
      </div>
    </div>
  );
}
