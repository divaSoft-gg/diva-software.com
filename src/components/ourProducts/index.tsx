import { useState } from "react";
// @ts-ignore
import { Scrollama, Step } from "@ap.cx/react-scrollama-wrapper";
import { Button, Image } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";
import { PRODUCTS_SECTION_ARRAY } from "../../assets/data";
import { IProduct, IStep } from "../../common/types";

export default function ProductsSection() {

    const [step, setStep] = useState<number>(0);

    const settings = {
        progress: true,
        debug: false,
        offset: 0.5,
        threshold: 4,
    };

    const onStepEnter = (step: IStep) => {
        setStep(step.index);
    };

    return (
        <section className="mt-[15vh]" id="products-section">
            <CenteredLayout>

                <h1 className="text-6xl font-semibold text-left mb-60 leading-normaltext-white">Our Products</h1>

                <section className="grid grid-cols-[2fr_4fr] w-full gap-10 min-h-screen">
                    <Scrollama
                        offset={settings.offset}
                        progress={settings.progress}
                        threshold={settings.threshold}
                        onStepEnter={onStepEnter}
                        debug={settings.debug}
                    >
                        {
                            PRODUCTS_SECTION_ARRAY.map((element: IProduct, index: number) => (
                                <Step key={index} className="mb-[60vh]">
                                    <div className="flex flex-col items-start gap-8">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row items-center gap-4">
                                                <Image
                                                    src={element.logo}
                                                    width={40}
                                                    alt="logo"
                                                />
                                                <h6 className="text-xl font-semibold tracking-tight">{element.name}</h6>
                                            </div>
                                            <h3 className="text-3xl font-semibold tracking-tight text-left">{element.slug}</h3>
                                        </div>
                                        <p className="text-xl font-light text-left ">{element.description}</p>
                                        <Button
                                            variant="shadow"
                                            color="default"
                                            size="lg"
                                            className="w-fit"
                                        >
                                            Discover more
                                        </Button>
                                    </div>
                                </Step>
                            ))
                        }
                    </Scrollama>
                    <div className="sticky flex justify-center w-auto h-screen top-1/4">
                        <div className="relative">
                            <div
                                className="absolute w-full h-[500px] -z-10 rounded-xl -top-8 left-0 transition-all ease-in-out duration-250"
                                style={{
                                    backgroundColor: PRODUCTS_SECTION_ARRAY[step].customStyles.bgColor,
                                    rotate: PRODUCTS_SECTION_ARRAY[step].customStyles.rotation,
                                }}
                            >
                            </div>

                            <Image
                                src={`${PRODUCTS_SECTION_ARRAY[(step as number)]?.preview}`}
                                width={700}
                                className="w-full"
                            />
                        </div>
                    </div>
                </section>
            </CenteredLayout>
        </section>

    )
};
