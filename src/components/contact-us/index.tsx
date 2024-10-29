import { Button, Input, Textarea } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";
import { useTranslation } from "react-i18next";
import { Socials } from "../../common/types";
import { TFunction } from 'i18next';

export default function ContactUs() {
    const { t }: { t: TFunction } = useTranslation()
    const socials: Socials[] = t('contactUs.socials', { returnObjects: true }) as Socials[];
    return (

        <section id="contact-us">
            <CenteredLayout>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="flex flex-col w-full gap-6 ">

                        <h6 className="font-semibold text-left text-black text-7xl dark:text-white">{t('contactUs.title')} <br />{t('contactUs.subTitle')}</h6>
                        <p className="py-6 text-left text-gray-700 text-medium w-96 dark:text-white">{t('contactUs.description')}</p>
                        <ul className="flex flex-col w-full gap-2 pb-6 list-none lg:pb-0">
                            <li>
                                <h6 className="py-4 text-sm font-semibold tracking-wide text-gray-500 dark:text-white">{t('contactUs.ReachUsTitle')}</h6>
                            </li>
                            {socials.map((element: Socials, index: number) => (
                                <li key={index} >
                                    <span className="text-lg font-semibold text-black dark:text-white">{element.answer}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ContactUsForm t={t} />
                </div>
            </CenteredLayout>
        </section>

    )
}

function ContactUsForm({ t }: { t: TFunction }) {
    return (
        <form
            name="diva-software-submissions"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="w-full lg:px-0"
        >
            <input type="hidden" name="form-name" value="diva-software-submissions" />
            <div className="flex flex-col gap-6 ">
                <Input
                    type="text"
                    label={t('contactUs.form.fullName')}
                    placeholder={t('contactUs.form.fullNamePlaceholder')}
                    name="client-name"
                    required
                    variant="bordered"

                />
                <div className="flex gap-4">

                    <Input
                        type="tel"
                        label={t('contactUs.form.phone')}
                        placeholder={t('contactUs.form.phonePlaceholder')}
                        name="client-tel"
                        required
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        variant="bordered"

                    />
                    <Input
                        type="text"
                        label={t('contactUs.form.company')}
                        placeholder={t('contactUs.form.companyPlaceholder')}
                        name="client-company"
                        required
                        variant="bordered"

                    />
                </div>

                <Input
                    type="email"
                    label={t('contactUs.form.email')}
                    placeholder={t('contactUs.form.emailPlaceholder')}
                    name="client-email"
                    variant="bordered"

                    required
                />


                <Textarea
                    variant="bordered"
                    label={t('contactUs.form.description')}
                    placeholder={t('contactUs.form.descriptionPlaceholder')}
                    name='client-message'
                    rows={20}
                    required
                />


                <Button size="lg"
                    className="w-full"
                    variant="shadow" type="submit">{t('contactUs.form.button')}</Button>
            </div>
        </form>
    )


}
