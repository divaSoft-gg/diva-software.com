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
        offset: 0.2,
        threshold: 0.2,
    };

    const styles = {
        main: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        graphic: {
            flexBasis: '60%',
            position: 'sticky',
            width: '100%',
            top: '160px',
            alignSelf: 'flex-start',
        },
        scroller: {
            flexBasis: '35%',
        },

    };

    const onStepEnter = (step: { index: number, element: HTMLElement, direction: string }) => {
        setStep(step.index); // Store the current step index
    };

    return (
        <CenteredLayout>
            <section className="!relative w-full h-full  overflow-hidden bg-yellow-400 flex justify-between ">
                <div className="bg-green-700 basis-1/3">
                    <Scrollama
                        offset={settings.offset}
                        progress={settings.progress}
                        threshold={settings.threshold}
                        onStepEnter={onStepEnter}
                        debug={settings.debug}

                    >
                        {PRODUCTS_SECTION_ARRAY.map((element) => (
                            <Step className='bg-violet-700'>
                                <div className="py-20">
                                    <div className="flex flex-col items-start gap-4 ">
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
                                        <Button variant="flat" color="warning" radius="lg" size="lg" className="w-fit">Visit Website</Button>

                                    </div>
                                </div>
                            </Step>
                        ))}
                    </Scrollama>
                </div>

                {/* <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-400"> */}
                <Image
                    src={`${PRODUCTS_SECTION_ARRAY[(step as number)]?.websitePreviewPath}`}
                    width={700}
                    height={350}
                    className="sticky top-0 right-0"
                />
                {/* </div> */}

            </section>
        </CenteredLayout>
    )





    return (
        <CenteredLayout>
            <section className="flex flex-row flex-1 min-h-screen gap-8 p-0 ">
                <Scrollama
                    className="flex flex-col gap-8 basis-1/3"
                    offset={settings.offset}
                    progress={settings.progress}
                    threshold={settings.threshold}
                    onStepEnter={onStepEnter}
                    debug={settings.debug}
                >
                    {PRODUCTS_SECTION_ARRAY.map((element) => (
                        <Step
                            key={element.id}
                            className='first:mt-[25vh] last:mb-[20vh]'
                        >

                            <div className="flex flex-col items-start gap-4 mb-16">
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
                                <Button variant="flat" color="warning" radius="lg" size="lg" className="w-fit">Visit Website</Button>

                            </div>
                        </Step>
                    ))}
                </Scrollama>

                <div className=" flex flex-wrap content-center justify-center sticky top-8 basis-2/3 h-[calc(100vh-4rem)]    transition-colors duration-150 ease-in-out">

                    <Image
                        src={`${PRODUCTS_SECTION_ARRAY[(step as number)]?.websitePreviewPath}`}
                        width={700}
                        height={350}
                    />
                </div>
            </section>
        </CenteredLayout>
    );
};

export default ProductsSection;
