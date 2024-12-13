import { Image } from "@nextui-org/react";
import { Block, SliderProps } from "../../../../common/types";
import Slider, { Settings } from "react-slick";

export default function SharedSlider({ data }: Readonly<{ data: Block }>) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {data?.files?.map((element: SliderProps, index: number) => (
          <div
            key={index}
            className="flex justify-center items-center h-[400px]"
          >
            <Image
              className="max-w-full max-h-full shadow-md rounded-2xl"
              src={`${import.meta.env.VITE_CMS_URL}/${element.url}`}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
