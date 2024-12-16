import { Avatar } from "@nextui-org/react";
import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md";
import { locationsProps } from "../../common/types";

export default function LocationCard({
  element,
}: Readonly<{ element: locationsProps }>) {
  return (
    <div className="flex flex-col gap-10  rounded-md border dark:border-0 p-6 bg-[#F8FAFC] dark:bg-[#161616]">
      <div className="flex flex-row items-center justify-start gap-2">
        <Avatar src={element.flag} size="sm" className="scale-75" />
        <p className="text-2xl font-bold text-black uppercase dark:text-white">
          {element.countryName}
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-black text-start text-medium font-regular dark:text-white">
          {element.address}
        </p>
        <img
          src={element.map}
          width={100}
          className="self-center dark:invert"
        />
      </div>
      <ul className="self-start">
        {element.list.map((element: string, idx: number) => (
          <li
            key={idx}
            className=" text-[#161616]  dark:text-white flex flex-row gap-2 items-center"
          >
            {idx === 0 ? <MdOutlineEmail /> : <MdOutlinePhoneEnabled />}
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}
