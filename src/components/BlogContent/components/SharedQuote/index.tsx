import { Block } from "../../../../common/types";

export default function SharedQuote({ data }: Readonly<{ data: Block }>) {
  return (
    <div className="flex flex-col gap-6 p-4 border shadow-md">
      <h1 className="self-center text-4xl text-center text-black dark:text-white">
        {data.body}
      </h1>
      <small className="self-end font-semibold"> {data.title}</small>
    </div>
  );
}
