import { Button, Input, Textarea } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from "leaflet";
import './index.css';
import { useTranslation } from "react-i18next";
import { Socials } from "../../common/types";



export default function ContactUs() {
    const { t } = useTranslation()
    const socials: Socials[] = t('contactUs.socials', { returnObjects: true }) as Socials[];

    const LEAFLET_CENTER_MAP: LatLngTuple = [35.8355, 10.594233534131954];

    const MARKER_POSITION: LatLngTuple = [35.835150953310574, 10.594233534131954];

    return (
        <CenteredLayout>
            <div id="contact-us" className="w-full h-[500px] mt-10 relative flex flex-row gap-12">

                {/* Left: Map */}
                <div className="relative min-w-[500px] h-full">

                    <MapContainer
                        center={LEAFLET_CENTER_MAP}
                        zoom={15}
                        scrollWheelZoom={false}
                        className="w-full h-full -z-10"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={MARKER_POSITION}>
                            <Popup>{t('contactUs.marker')}</Popup>
                        </Marker>
                    </MapContainer>

                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-70 gradientOverlay"></div>

                    <div className="absolute top-0 left-0 z-10 flex flex-col w-full h-full gap-24 p-8">
                        <div>
                            <h1 className="text-4xl font-bold leading-normal text-left text-white ">{t('contactUs.title')}</h1>

                            <p className="text-lg leading-8 text-left text-white text-wrap muted">{t('contactUs.description')}</p>
                        </div>
                        <ul className="flex flex-col w-full gap-8 list-none ">
                            {socials.map((element: Socials, index: number) => (
                                <li key={index} className="flex flex-col gap-1 ">
                                    <h6 className="text-xs font-semibold text-white ">{element.question}</h6>
                                    <span className="text-sm font-normal text-white ">{element.answer}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Right: Form */}
                <form
                    name="diva-software-submissions"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    className="w-full"
                >
                    <input type="hidden" name="form-name" value="diva-software-submissions" />
                    <div className="flex flex-col w-full gap-6 ">
                        <Input
                            type="text"
                            label={t('contactUs.form.fullName')}
                            placeholder={t('contactUs.form.fullNamePlaceholder')}
                            name="client-name"
                            required
                        />
                        <Input
                            type="email"
                            label={t('contactUs.form.email')}
                            placeholder={t('contactUs.form.emailPlaceholder')}
                            name="client-email"
                            required
                        />
                        <Input
                            type="text"
                            label={t('contactUs.form.company')}
                            placeholder={t('contactUs.form.companyPlaceholder')}
                            name="client-company"
                            required
                        />
                        <Input
                            type="tel"
                            label={t('contactUs.form.phone')}
                            placeholder={t('contactUs.form.phonePlaceholder')}
                            name="client-tel"
                            required
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        />
                        <Textarea
                            variant="faded"
                            label={t('contactUs.form.description')}
                            placeholder={t('contactUs.form.descriptionPlaceholder')}
                            name='client-message'
                            rows={20}
                            required
                        />
                        <Button color="default" size="lg" className="w-full" variant="shadow" type="submit">{t('contactUs.form.button')}</Button>
                    </div>
                </form>

            </div>
        </CenteredLayout>
    )
}
