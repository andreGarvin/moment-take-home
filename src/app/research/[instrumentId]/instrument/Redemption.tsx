import { Empty, FormatValue } from "src/app/components/FormatValue";

import { InstrumentRedemption } from "src/types";

type RedemptionProps = {
  data: InstrumentRedemption;
};

export const Redemption: React.FC<RedemptionProps> = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-col w-3/4">
      <p className="mb-8 text-2xl font-light capitalize">redemption details</p>
      <div className="grid grid-cols-2 grid-flow-rows gap-10">
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">callable</p>
          <FormatValue data={data.callable} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">next callable date</p>
          <FormatValue data={data.next_call_date} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">call frequency</p>
          <FormatValue data={data.call_frequency} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">
            call minimum notification
          </p>
          <FormatValue data={data.call_notification_min} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">puttable</p>
          <FormatValue data={data.puttable} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">convertible</p>
          <FormatValue data={data.convertible} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">perpeptual</p>
          <Empty />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">call type</p>
          <FormatValue data={data.call_type} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">next call price</p>
          <FormatValue data={data.next_call_price} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">
            call notification convention
          </p>
          <FormatValue data={data.call_notification_convention} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">
            call notification maximum
          </p>
          <FormatValue data={data.call_notification_max} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">sinking fund</p>
          <FormatValue data={data.sinking_fund} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">convertible</p>
          <FormatValue data={data.convertible} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">insured</p>
          <FormatValue data={data.insured} />
        </span>
      </div>
    </div>
  );
};
