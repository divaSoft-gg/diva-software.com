import { Block } from "../../../../common/types";

export default function SharedMedia({ data }: Readonly<{ data: Block }>) {
  return (
    <div className="h-full">
      <img src={`${import.meta.env.VITE_CMS_URL}/${data?.file?.url}`} />
    </div>
  );
}
