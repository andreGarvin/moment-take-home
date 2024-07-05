export type InstrumentStatus =
  | "called"
  | "converted"
  | "defaulted"
  | "funged"
  | "liquidated"
  | "matured"
  | "outstanding"
  | "pre_issuance"
  | "put"
  | "repaid"
  | "tendered"
  | "repurchased"
  | "restructured"
  | "unknown";

export type InstrumentCoupon = Partial<{
  coupon_type: string;
  next_coupon_date: string;
  last_coupon_date: string;
  first_coupon_date: string;
}>;

export type InstrumentSummary = InstrumentCoupon &
  Partial<{
    isin: string;
    issuer: string;
    par_value: number;
    treasury_subtype: string;
  }>;

export type InstrumentIssuer = InstrumentCoupon &
  Partial<{
    ticker: string;
    sector: string;
    reg_s: boolean;
    "144a": boolean;
    currency: string;
    daycount: string;
    dated_date: string;
    seniority: string;
    issue_date: string;
    issue_size: number;
    issue_price: number;
    country_issue: string;
    trace_eligible: boolean;
    country_domicile: string;
    accrued_interest: number;
    private_placement: boolean;
    settlement_convention: string;
    issue_minimum_denomination: number;
  }>;

export type InstrumentRedemption = Partial<{
  insured: boolean;
  callable: boolean;
  call_type: string;
  puttable: boolean;
  convertible: boolean;
  sinking_fund: boolean;
  bond_warrant: boolean;
  call_frequency: string;
  next_call_date: string;
  next_call_price: string;
  call_notification_min: string;
  call_notification_max: string;
  issue_minimum_denomination: number;
  call_notification_convention: string;
}>;

export type InstrumentCredit = {
  sp_rating: string;
  sp_outlook: string;
  sp_rating_date: string;
  sp_creditwatch: string;
  sp_outlook_date: string;
  sp_creditwatch_date: string;
};

export type InstrumentPricing = {
  duration: number;
  close_ytw: number;
  close_price: number;
  close_price_asof: string;
  liquidity_retail_buy: number;
  liquidity_retail_sell: number;
  liquidity_retail_aggregate: number;
  liquidity_institutional_buy: number;
  liquidity_institutional_sell: number;
  liquidity_institutional_aggregate: number;
};

export type Instrument = InstrumentSummary &
  InstrumentPricing &
  InstrumentIssuer &
  InstrumentRedemption &
  InstrumentCredit &
  Partial<{
    type: string;
    cusip: string;
    description: string;
    maturity_date: string;
    description_short: string;
  }>;
