import { format } from "date-fns";

export const Empty = () => {
  return <p className="text-black">___</p>;
}

type FormatValueProps = {
  data: any;
  append?: string;
  prepend?: string;
};

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const FormatValue: React.FC<FormatValueProps> = (props) => {
  const { data, prepend, append } = props;

  if (data === null) {
    return <Empty />;
  }

  const formatters = {
    number: (val) => (
      <p className="text-black">
        {prepend}
        {val}
        {append}
      </p>
    ),
    string: (val) => {
      if (dateRegex.test(val)) {
        val = format(val, "MMMM do yyyy");
      }

      return (
        <p className="text-black capitalize">
          {prepend}
          {val}
          {append}
        </p>
      );
    },
    boolean: (val) => (
      <p className="text-black capitalize">{val ? "yes" : "no"}</p>
    ),
    undefined: () => <Empty />,
  };

  const type = typeof data;
  return formatters[type](data);
}
