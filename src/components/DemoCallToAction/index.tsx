import { Button, Image } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";

export default function DemoCallToAction() {
  return (
    <section id="demo-calltoaction">
      <CenteredLayout>
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="font-semibold text-[#6e6e6e] dark:text-white">
            Reach Us
          </p>
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            Votre atout stratégique
          </h1>
          <p className="w-1/2 text-center text-black dark:text-white">
            Maximisez l’efficacité et la rentabilité avec une solution ERP qui
            redéfinit la gestion textile. Découvrez ci-dessous les différents
            modules qui composent notre outil global.
          </p>
          <Button
            variant="solid"
            color="warning"
            className="w-1/3"
            radius="full"
          >
            Réserver un demo
          </Button>
        </div>
      </CenteredLayout>
    </section>
  );
  return (
    <section id="demo-calltoaction">
      <CenteredLayout>
        <div className="flex flex-row gap-6 rounded-xl bg-[#F3F3F3] dark:bg-[#161616] p-10">
          <Image src="tablet.png" />
          <div className="flex flex-col gap-10">
            <p className="font-semibold text-[#6e6e6e] dark:text-white">
              Reach Us
            </p>
            <h1 className="w-2/3 text-4xl font-semibold text-black dark:text-white ">
              Votre atout stratégique
            </h1>
            <p className="text-black dark:text-white">
              Maximisez l’efficacité et la rentabilité avec une solution ERP qui
              redéfinit la gestion textile. Découvrez ci-dessous les différents
              modules qui composent notre outil global. .
            </p>
            <Button variant="solid" color="warning" className="w-1/2">
              Réserver un demo
            </Button>
          </div>
        </div>
      </CenteredLayout>
    </section>
  );
}
