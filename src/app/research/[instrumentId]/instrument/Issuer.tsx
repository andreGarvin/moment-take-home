import { Empty, FormatValue } from "src/app/components/FormatValue";

import { InstrumentIssuer } from "src/types";

type IssuerProps = {
  data: InstrumentIssuer;
};

export const Issuer: React.FC<IssuerProps> = (props) => {
  const { data } = props;

  return (
    <div className="w-full flex flex-col">
      <p className="mb-8 text-2xl font-light capitalize">issue details</p>
      <div className="grid grid-cols-3 grid-flow-rows gap-10">
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">country issue</p>
          <FormatValue data={data.country_issue} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">ticker</p>
          <FormatValue data={data.ticker} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">issue date</p>
          <FormatValue data={data.issue_date} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">previous coupon date</p>
          <FormatValue data={data.last_coupon_date} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">issue price</p>
          <FormatValue data={data.issue_price} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">TRACE eligible</p>
          <FormatValue data={data.trace_eligible} />
        </span>
        <span className="flex flex-col items-start mr-24 font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">private placement</p>
          <FormatValue data={data.private_placement} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">accrued interest</p>
          <FormatValue data={data.accrued_interest} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">country domicile</p>
          <FormatValue data={data.country_domicile} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">sector</p>
          <FormatValue data={data.sector} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">dated date</p>
          <FormatValue data={data.dated_date} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">next coupon date</p>
          <FormatValue data={data.next_coupon_date} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">issue size</p>
          <FormatValue
            prepend="$"
            data={new Intl.NumberFormat("us")
              .format(data.issue_size as number)
              .toString()}
          />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">MSRB eligible</p>
          <Empty />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">rule 144a</p>
          <FormatValue data={data["144a"]} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">day count convention</p>
          <FormatValue data={data.daycount} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">currency</p>
          <FormatValue data={data.currency} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">seniority</p>
          <FormatValue data={data.seniority} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">first coupon date</p>
          <FormatValue data={data.first_coupon_date} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">last coupon date</p>
          <FormatValue data={data.last_coupon_date} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">minimum denomination</p>
          <FormatValue data={data.issue_minimum_denomination} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">DTC eligible</p>
          <Empty />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">regulation s</p>
          <FormatValue data={data.reg_s} />
        </span>
        <span className="flex flex-col items-start font-light capitalize">
          <p className="mb-2 text-[#707070] capitalize">
            settlement convention
          </p>
          <FormatValue data={data.settlement_convention} />
        </span>
      </div>
    </div>
  );
};

