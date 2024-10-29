import { Button, Image } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";
import { Products } from "../../common/types";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme";
import { FaArrowRight } from "react-icons/fa6";


export default function ProductsSection() {
    const { t } = useTranslation()
    const products: Products[] = t('ourProducts.websites', { returnObjects: true }) as Products[];
    const { theme } = useTheme()


    return (
        <section className="p-20" id="products-section">
            <CenteredLayout>
                <h1 className="mb-10 text-4xl font-semibold leading-normal text-left text-black dark:text-white lg:text-6xl ">{t('ourProducts.title')}</h1>
                <section className="flex flex-col gap-10 ">
                    {
                        products.map((product: Products, index: number) => (
                            <div key={index} className="relative flex flex-row w-full gap-6 bg-[#C7E6FF] rounded-lg">
                                <div className="flex flex-col items-start w-full gap-8 p-10">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row items-center gap-4">
                                            <Image
                                                className={theme !== 'dark' && product.invert ? 'invert' : ''}
                                                src={product.imagePath}
                                                width={40}
                                                alt="logo"
                                            />
                                            <h6 className="font-semibold tracking-tight text-black lg:text-xl dark:text-black">{product.websiteName}</h6>
                                        </div>
                                        <h3 className="text-xl font-semibold tracking-tight text-left lg:text-3xl dark:text-black ">{product.websiteTitle}</h3>
                                    </div>
                                    <p className="text-xl font-light text-left dark:text-black ">{product.websiteDescription}</p>
                                    <Button
                                        variant="light"
                                        color="primary"
                                        size="lg"
                                        className="w-fit"
                                        endContent={<FaArrowRight />}
                                    >
                                        {product.button}
                                    </Button>
                                </div>
                                <div className="flex items-end justify-end">
                                    <Image
                                        src={product.preview}
                                        width={700}
                                        className="w-full rounded-none"
                                    />
                                </div>
                            </div>
                        ))
                    }
                </section>
            </CenteredLayout>
        </section>

    )
};
