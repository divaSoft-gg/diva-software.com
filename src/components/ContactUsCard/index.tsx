import { useTranslation } from "react-i18next";
import { locationsProps } from "../../common/types";
import LocationCard from "../LocationCard";
import CenteredLayout from "../ui/centredLayout";

export default function ContactUsCard() {
  const { t } = useTranslation();
  const locations: locationsProps[] = t("contactUsCards.locations", {
    returnObjects: true,
  }) as locationsProps[];
  return (
    <section id="contact-locations-section">
      <CenteredLayout>
        <div className="flex flex-col gap-8">
          <h1 className="pb-3 text-4xl font-semibold leading-normal text-left text-black lg:text-6xl dark:text-white">
            {t("contactUsCards.locationTitle")}
          </h1>
          <div className="grid grid-cols-1 gap-3 mt-8 lg:grid-cols-3">
            {locations.map((element, index) => (
              <LocationCard key={index} element={element} />
            ))}
          </div>
        </div>
      </CenteredLayout>
    </section>
  );
}
