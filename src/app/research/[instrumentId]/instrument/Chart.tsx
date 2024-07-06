"use client";

import { useEffect, useState } from "react";

import { AreaChart, CustomTooltipProps } from "@tremor/react";
import { format, subDays } from "date-fns";

import { PriceHistory } from "src/types";
import { getInstrumentPriceHistory } from "src/client";

type ChartData = PriceHistory & {
  time: string;
};

const dataFormatter = (number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

const ChartToolTip: React.FC<{ data: ChartData }> = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-1 space-x-2.5">
      <div className="space-y-1">
        <p className="text-tremor-content">
          {format(data.timestamp, "MMMM do pp")}
        </p>
        <span className="flex flex-row items-center">
          <p className="font-medium text-tremor-content-emphasis">
            {data.yield_to_worst}%
          </p>
          <p className="font-medium text-tremor-content-emphasis ml-2">
            (${Intl.NumberFormat("us").format(data.price).toString()})
          </p>
        </span>
      </div>
    </div>
  );
}

const customTooltip = (props: CustomTooltipProps) => {
  const { payload, active } = props;
  if (!active || !payload) return null;

  return (
    <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
      {payload.map((category, index) => (
        <ChartToolTip key={index} data={category.payload} />
      ))}
    </div>
  );
};

type ChartProps = {
  instrumentId: string;
};

export const Chart: React.FC<ChartProps> = (props) => {
  const { instrumentId } = props;

  const [priceHistory, setPriceHistory] = useState<PriceHistory[]>();

  useEffect(() => {
    const start = subDays(new Date(), 1);
    const end = new Date();

    getInstrumentPriceHistory(instrumentId, "1day", start, end)
      .then(data => setPriceHistory(data));
  }, [instrumentId]);

  return (
    <AreaChart
      index="time"
      yAxisWidth={60}
      className="h-96"
      colors={["indigo"]}
      categories={["price"]}
      customTooltip={customTooltip}
      valueFormatter={dataFormatter}
      data={priceHistory as PriceHistory[]}
    />
  );
}
