import { Instrument, InstrumentStatus } from "./types";

async function fetchData<T>(url: string): Promise<T> {
    const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PAPER_API_KEY}`,
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json()
}

export async function getInstrument(instrumentId: string): Promise<Instrument> {
  const url = new URL(process.env.PAPER_API_URL as string);

  url.pathname = `${url.pathname}/data/instrument/${instrumentId}/`;

  const data = await fetchData<Instrument>(url.toString());

  return data;
}

export async function getInstruments(page: number = 1, size: number = 12, status: InstrumentStatus | void = undefined): Promise<Instrument[]> {
  const url = new URL(process.env.PAPER_API_URL as string);

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
