import { InstrumentList } from "src/app/components/Instrument";

import { getInstruments } from "src/client";

export default async function Page() {
  const instruments = await getInstruments();

  return (
    <div className="py-4">
      <InstrumentList data={instruments} />
    </div>
  );
}
