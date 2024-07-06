import { InstrumentList } from "src/app/components/Instrument";

import { Header } from "./Header";
import { Title } from "./Title";

import { AnalyticalPricing } from "./instrument/AnalyticalPricing";
import { Redemption } from "./instrument/Redemption";
import { Summary } from "./instrument/Summary";
import { Credit } from "./instrument/Credit";
import { Issuer } from "./instrument/Issuer";

import { getInstrument, getInstruments } from "src/client";
import { Section } from "src/app/components/ui/Section";


export default async function Page({ params }) {
  const { instrumentId } = params;

  const instrument = await getInstrument(instrumentId as string);

  const instruments = (await getInstruments(2, 6, "matured"));

  const security = {
    isin: instrument.isin,
    type: instrument.type,
    cusip: instrument.cusip,
    issuer: instrument.issuer,
    par_value: instrument.par_value,
    coupon_type: instrument.coupon_type,
    maturity_date: instrument.maturity_date,
    treasury_subtype: instrument.treasury_subtype,
    last_coupon_date: instrument.last_coupon_date,
    next_coupon_date: instrument.next_coupon_date,
    first_coupon_date: instrument.first_coupon_date,
    description_short: instrument.description_short,
  };

  const issuer = {
    reg_s: instrument.reg_s,
    ticker: instrument.ticker,
    sector: instrument.sector,
    "144a": instrument["144a"],
    currency: instrument.currency,
    daycount: instrument.daycount,
    dated_date: instrument.dated_date,
    seniority: instrument.seniority,
    issue_date: instrument.issue_date,
    issue_size: instrument.issue_size,
    issue_price: instrument.issue_price,
    country_issue: instrument.country_issue,
    trace_eligible: instrument.trace_eligible,
    next_coupon_date: instrument.next_coupon_date,
    last_coupon_date: instrument.last_coupon_date,
    country_domicile: instrument.country_domicile,
    accrued_interest: instrument.accrued_interest,
    private_placement: instrument.private_placement,
    first_coupon_date: instrument.first_coupon_date,
    settlement_convention: instrument.settlement_convention,
    issue_minimum_denomination: instrument.issue_minimum_denomination,
  };


  const redemption = {
    insured: instrument.insured,
    callable: instrument.callable,
    call_type: instrument.call_type,
    puttable: instrument.puttable,
    convertible: instrument.convertible,
    sinking_fund: instrument.sinking_fund,
    bond_warrant: instrument.bond_warrant,
    call_frequency: instrument.call_frequency,
    next_call_date: instrument.next_call_date,
    next_call_price: instrument.next_call_price,
    call_notification_min: instrument.call_notification_min,
    call_notification_max: instrument.call_notification_max,
    issue_minimum_denomination: instrument.issue_minimum_denomination,
    call_notification_convention: instrument.call_notification_convention,
  };


  const credit = {
    sp_rating: instrument.sp_rating,
    sp_outlook: instrument.sp_outlook,
    sp_rating_date: instrument.sp_rating_date,
    sp_creditwatch: instrument.sp_creditwatch,
    sp_outlook_date: instrument.sp_outlook_date,
    sp_creditwatch_date: instrument.sp_creditwatch_date,
  };

  const pricing = {
    duration: instrument.duration,
    close_ytw: instrument.close_ytw,
    close_price: instrument.close_price,
    close_price_asof: instrument.close_price_asof,
    liquidity_retail_buy: instrument.liquidity_retail_buy,
    liquidity_retail_sell: instrument.liquidity_retail_sell,
    liquidity_retail_aggregate: instrument.liquidity_retail_aggregate,
    liquidity_institutional_buy: instrument.liquidity_institutional_buy,
    liquidity_institutional_sell: instrument.liquidity_institutional_sell,
    liquidity_institutional_aggregate: instrument.liquidity_institutional_aggregate,
  };

  return (
    <div className="h-full flex flex-col items-start my-8">
      {/* instrument Title */}
      <Title cusip={instrument.cusip as string} />

      {/* instrument Header */}
      <Header
        maturityDate={instrument.maturity_date as string}
        description={instrument.description_short as string}
      />

      <div className="h-full w-full flex flex-col my-8 pb-16 border-b-2 border-[#E4E4E7]">
        {/* instrument Summary */}
        {/* @ts-ignore */}
        <Summary data={security} />
        <div className="w-full flex flex-row justify-between items-start">
          {/* instrument issuer */}
          <Issuer data={issuer} />
          <Redemption data={redemption} />
          <Credit data={credit} />
        </div>
      </div>

      <Section label="pricing & analytics">
        <AnalyticalPricing data={pricing} />
      </Section>

      <Section label="other UTS issues">
        <InstrumentList data={instruments} />
      </Section>
    </div>
  );
}
