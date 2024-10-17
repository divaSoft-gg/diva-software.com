import { Button, Image } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";
import { Products } from "../../common/types";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme";

export default function ProductsSectionMobile() {
    const { t } = useTranslation()
    const products: Products[] = t('ourProducts.websites', { returnObjects: true }) as Products[];

    const { theme } = useTheme()


    return (
        <section className="px-8 lg:px-0" id="products-section">
            <CenteredLayout>
                <h1 className="mb-10 text-4xl font-semibold text-left lg:text-6xl lg:mb-60 leading-normaltext-white ">{t('ourProducts.title')}</h1>

                <section className="flex flex-col gap-10 lg:hidden">
                    {
                        products.map(
                            (product: Products, index: number) => (
                                <div className="flex flex-col items-start gap-8" key={index}>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row items-center gap-4">
                                            <Image
                                                className={theme !== 'dark' && product.invert ? 'invert' : ''}
                                                src={product.imagePath}
                                                width={40}
                                                alt="logo"
                                            />
                                            <h6 className="font-semibold tracking-tight lg:text-xl ">{product.websiteName}</h6>
                                        </div>
                                        <h3 className="text-xl font-semibold tracking-tight text-left lg:text-3xl ">{product.websiteTitle}</h3>
                                    </div>
                                    <p className="text-xl font-light text-justify ">{product.websiteDescription}</p>
                                    <Button
                                        variant="shadow"
                                        color="default"
                                        size="md"
                                        className="self-start w-fit"
                                    >
                                        {product.button}
                                    </Button>

                                    <div className="relative my-10">
                                        <div
                                            className="absolute w-full h-full transition-all ease-in-out -z-10 rounded-xl duration-250"
                                            style={{
                                                backgroundColor: product.customStyles.bgColor,
                                                rotate: product.customStyles.rotation,
                                            }}
                                        >
                                        </div>

                                        <Image
                                            src={`${product?.preview}`}
                                            width={700}
                                            className="w-full "
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
