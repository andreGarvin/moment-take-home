import { format } from "date-fns";
import { Instrument, InstrumentFrequency, InstrumentStatus, PriceHistory } from "./types";

async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAPER_API_KEY}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data for ${url}`);
  }

  return await res.json()
}

export async function getInstrument(instrumentId: string): Promise<Instrument> {
  const url = new URL(process.env.NEXT_PUBLIC_PAPER_API_URL as string);

  url.pathname = `${url.pathname}/data/instrument/${instrumentId}/`;

  const data = await fetchData<Instrument>(url.toString());

  return data;
}

export async function getInstruments(page: number = 1, size: number = 12, status: InstrumentStatus | void = undefined): Promise<Instrument[]> {
  const url = new URL(process.env.NEXT_PUBLIC_PAPER_API_URL as string);

  // need to add trailing slash for hit the /instrument
  url.pathname = `${url.pathname}/data/instrument/`;
  url.searchParams.set("page", page.toString());
  url.searchParams.set("page_size", size.toString());
  if (status) {
    url.searchParams.set("status", status);
  }

  const { data } = await fetchData<{ data: Instrument[] }>(url.toString());

  return data;
}

export async function getInstrumentPriceHistory(instrumentId: string, frequency: InstrumentFrequency = "1day", startDate: Date, endDate: Date): Promise<PriceHistory[]> {
  const start = format(startDate, "yyyy-MM-dd");
  const end = format(endDate, "yyyy-MM-dd");

  const url = new URL(process.env.NEXT_PUBLIC_PAPER_API_URL as string);

  // need to add trailing slash for hit the /instrument
  url.pathname = `${url.pathname}/data/instrument/${instrumentId}/price/`;
  url.searchParams.set("start", start.toString());
  url.searchParams.set("end", end.toString());
  if (frequency) {
    url.searchParams.set("frequency", frequency);
  }

  const { data } = await fetchData<{ data: PriceHistory[] }>(url.toString());

  return data;
}

