import CenteredLayout from "../ui/centredLayout";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import {
  CardDescription,
  CardHeader,
  CardList,
  ContactUsForm,
} from "@aymen_diva/diva-contact-form";
import { useTheme } from "../../hooks/useTheme";
export default function ContactUs() {
  const { theme } = useTheme();
  const { t }: { t: TFunction } = useTranslation();
  const socials: string[] = t("contactUs.socials", {
    returnObjects: true,
  }) as string[];
  return (
    <section id="contact-us">
      <CenteredLayout>
        <ContactUsForm theme={theme}>
          <CardHeader
            textSize="text7xl"
            title={t("contactUs.title") + " " + t("contactUs.subTitle")}
          />
          <CardDescription
            description={t("contactUs.description")}
            font="normal"
          />
          <CardList
            list={socials}
            listTitle={t("contactUs.ReachUsTitle")}
            font="bold"
            listTextSize="lg"
            listFont="semiBold"
            elementListGap="small"
            paddingY="small"
          />
        </ContactUsForm>
      </CenteredLayout>
    </section>
  );
}
