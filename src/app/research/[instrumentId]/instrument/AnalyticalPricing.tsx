import { twJoin } from "tailwind-merge";
import { Star } from "lucide-react";

import { Empty, FormatValue } from "src/app/components/FormatValue";

import { InstrumentPricing } from "src/types";

type AnalyticalPricingProps = {
  data: InstrumentPricing;
};

export const AnalyticalPricing: React.FC<AnalyticalPricingProps> = (props) => {
  const { data } = props;

  return (
    <div className="w-full flex flex-col my-8">
      <div className="flex flex-col mb-8">
        <p className="mb-4 text-2xl font-light capitalize">
          pricing & Analytics
        </p>
        <span>
          <p>moderation duration</p>
          <FormatValue data={data.duration} />
        </span>
      </div>
      <div className="grid grid-cols-3 grid-flow-cols gap-10">
        <div className="flex flex-col">
          <p className="capitalize">retail aggregate liquidity score</p>
          <Rating rating={data.liquidity_retail_aggregate} />
        </div>
        <div className="flex flex-col">
          <p className="capitalize">retail buy liquidity score</p>
          <Rating rating={data.liquidity_institutional_buy} />
        </div>
        <div className="flex flex-col">
          <p className="capitalize">retail sell liquidity score</p>
          <Rating rating={data.liquidity_institutional_sell} />
        </div>
        <div className="flex flex-col">
          <p className="capitalize">inst. aggregate liquidity score</p>
          <Rating rating={data.liquidity_institutional_aggregate} />
        </div>
        <div className="flex flex-col">
          <p className="capitalize">inst. buy liquidity score</p>
          <Rating rating={data.liquidity_institutional_buy} />
        </div>
        <div className="flex flex-col">
          <p className="capitalize">inst. sell liquidity score</p>
          <Rating rating={data.liquidity_institutional_sell} />
        </div>
        <div className="flex flex-col">
          <p className="capitalize">third party evaluated price</p>
          <FormatValue
            prepend="$"
            data={new Intl.NumberFormat("us")
              .format(data.close_price as number)
              .toString()}
          />
        </div>
        <div className="flex flex-col">
          <p className="capitalize">third party evaluated YTW</p>
          <FormatValue data={data.close_ytw} />
        </div>
        <div className="flex flex-col">
          <p className="capitalize">third party evaluated date</p>
          <FormatValue data={data.close_price_asof} />
        </div>
      </div>
    </div>
  );
}

type RatingProps = {
  rating: number;
}

const Rating: React.FC<RatingProps> = (props) => {
  const { rating } = props;

  if (rating === null) {
    return <Empty />;
  }

  const stars = [];
  for (let i = 1; i <= 6; i++) {
    const className = twJoin(
      "text-[#F38744]",
      i <= rating ? "fill-[#F38744]" : "fill-none",
    );

    stars.push(
      // @ts-ignore
      <Star key={i} className={className} />
    )
  }

  return (
    <div className="flex flex-row items-center">
      {...stars}
    </div>
  );
}
