import { useState } from "react";
// @ts-ignore
import { Scrollama, Step } from "@ap.cx/react-scrollama-wrapper";
import { Button, Image } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";
import { PRODUCTS_SECTION_ARRAY } from "../../assets/data";

const ProductsSection = () => {
    const [step, setStep] = useState<number | null>(0);

    const settings = {
        progress: true,
        debug: false,
        offset: 0.5,
        threshold: 4,
    };




    const onStepEnter = (step: { index: number, element: HTMLElement, direction: string }) => {
        setStep(step.index);
    };
    return (
        <CenteredLayout>
            <section className="grid grid-cols-[2fr_4fr] w-full gap-10 min-h-screen py-10">
                <Scrollama
                    offset={settings.offset}
                    progress={settings.progress}
                    threshold={settings.threshold}
                    onStepEnter={onStepEnter}
                    debug={settings.debug}
                >
                    {PRODUCTS_SECTION_ARRAY.map((element) => (
                        <Step key={element.id} className="mb-[60vh]">
                            <div className="flex flex-col items-start ">
                                <div className="flex flex-row items-center gap-4">
                                    <Image
                                        src={element.websiteLogoPath}
                                        width={50}
                                        alt={element.websiteLogoAlt}
                                    />
                                    <h6 className="text-lg font-semibold tracking-tight text-gray-300">
                                        {element.title}
                                    </h6>
                                </div>
                                <p className="max-w-2xl mb-6 text-lg font-light text-left text-gray-300">
                                    {element.description}
                                </p>
                                <Button
                                    variant="flat"
                                    color="warning"
                                    radius="lg"
                                    size="lg"
                                    className="w-fit"
                                >
                                    Visit Website
                                </Button>
                            </div>
                        </Step>
                    ))}
                </Scrollama>
                <div className="sticky flex justify-center w-auto h-screen p-6 top-1/4 ">
                    <div className="absolute w-full h-[500px] bg-green-500 -z-10 rounded-xl rotate-3 top-1/4 -translate-y-1/2"></div>

                    <Image
                        src={`${PRODUCTS_SECTION_ARRAY[(step as number)]?.websitePreviewPath}`}
                        height={350}
                        width={700}

                        className="w-full"
                    />
                </div>
            </section>
        </CenteredLayout>
    )
};

export default ProductsSection;
