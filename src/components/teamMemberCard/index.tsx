import { Image } from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";

export default function TeamCard({ imagePath, name, jobTitle }: { imagePath: string, name: string, jobTitle: string }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className="relative m-6 overflow-hidden group">
            {/* Overlay */}
            <div className="absolute inset-0 w-full h-full bg-black rounded-xl opacity-0 transform translate-y-[-100%] transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-50"></div>

            {/* Text on hover */}
            <div className="absolute z-10 text-white transition-opacity duration-300 opacity-0 left-1/3 bottom-2 group-hover:opacity-100">
                <h4 className="text-lg font-bold">{name}</h4>
                <small className="text-sm">{jobTitle}</small>
            </div>

            {/* Image */}
            <Image
                alt="Card background"
                width={isMobile ? 180 : 300}
                height={isMobile ? 240 : 360}
                className="object-cover w-full h-full -z-10 rounded-xl"
                src={imagePath}
            />
        </div>
    );
};
