import { PropsWithChildren } from "react";

type SectionProps = {
  label: string;
}

export const Section: React.FC<PropsWithChildren<SectionProps>>  = (props) => {
  const { label, children } = props;
  return (
    <div className="w-full flex flex-col my-8">
      <div className="flex flex-col mb-8">
        <p className="mb-8 text-2xl font-light capitalize">{label}</p>
        {children}
      </div>
    </div>
  );
}
