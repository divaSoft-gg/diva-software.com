import { Button, Image, Link } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";
import { Solutions } from "../../common/types";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme";
import { FaArrowRight } from "react-icons/fa6";

export default function ProductsSection() {
  const { t } = useTranslation();
  const solutions: Solutions[] = t("ourSolutions.websites", {
    returnObjects: true,
  }) as Solutions[];
  const { theme } = useTheme();

  return (
    <section id="solutions-section">
      <CenteredLayout>
        <h1 className="mb-10 text-4xl font-semibold leading-normal text-left text-black dark:text-white lg:text-6xl ">
          {t("ourSolutions.title")}
        </h1>
        <section className="flex flex-col gap-10 ">
          {solutions.map((solution: Solutions, index: number) => (
            <div
              key={index}
              className="relative flex flex-row w-full gap-6 overflow-hidden productCard rounded-2xl group"
            >
              <div className="absolute top-0 left-0 w-full h-56 productCardTopGrid"></div>
              <div className="flex flex-col items-start w-full gap-8 p-10">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-4">
                    <Image
                      className={
                        theme !== "dark" && solution.invert ? "invert" : ""
                      }
                      src={solution.imagePath}
                      width={40}
                      alt="logo"
                    />
                    <h6 className="font-semibold tracking-tight text-black lg:text-xl dark:text-white">
                      {solution.websiteName}
                    </h6>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-left lg:text-3xl dark:text-white">
                    {solution.websiteTitle}
                  </h3>
                </div>
                <p className="text-xl font-light text-left text-black dark:text-white">
                  {solution.websiteDescription}
                </p>
                <Button
                  as={Link}
                  href={solution.buttonHref}
                  isExternal
                  variant="light"
                  color="primary"
                  size="lg"
                  className="w-fit"
                  endContent={<FaArrowRight />}
                >
                  {solution.button}
                </Button>
              </div>
              <div className="flex flex-col justify-end">
                <Image
                  src={solution.preview}
                  width={700}
                  className="w-full rounded-none group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </section>
      </CenteredLayout>
    </section>
  );
}
