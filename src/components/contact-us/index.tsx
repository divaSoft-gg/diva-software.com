import { Button, Input, Textarea } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { CONTACT_US_METHODS, HOME_PAGE_COPY } from "../../assets/data";
import SectionsTitle from "../shared/sectionTitle";
import { IContactUsMethods } from "../../common/types";
import { LatLngTuple } from "leaflet";



export default function ContactUs() {

    const LEAFLET_CENTER_MAP: LatLngTuple = [35.8355, 10.594233534131954];

    const MARKER_POSITION: LatLngTuple = [35.835150953310574, 10.594233534131954];


    return (
        <div className="py-12 bg-section-background">
            <CenteredLayout>

                <SectionsTitle title={HOME_PAGE_COPY.contactUs.title} subtitle={HOME_PAGE_COPY.contactUs.subTitle} />

                <section className="grid grid-cols-[500px_1fr] items-end gap-8 mt-12">

                    <div className="flex flex-col items-end justify-center gap-4 ">
                        {/* Contact Methods Section */}
                        <ul className="w-full list-none">
                            {
                                CONTACT_US_METHODS.map((element: IContactUsMethods, index: number) => (
                                    <li key={index} className="flex items-center gap-2 my-4">
                                        <element.icon className="w-4 h-4 !text-gray-200" />
                                        <span className="text-sm">{element.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        {/* Map Section */}
                        <MapContainer
                            center={LEAFLET_CENTER_MAP}
                            zoom={15}
                            scrollWheelZoom={false}
                            className="h-[200px] w-full"
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={MARKER_POSITION}>
                                <Popup>Diva Software, Third Floor (office 30)</Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    <form
                        name="diva-software-submissions"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="diva-software-submissions" />
                        <div className="flex flex-col w-full gap-4 lg:grid lg:grid-cols-2">
                            <Input
                                type="text"
                                label="Nom & Prénom"
                                placeholder="Jhon Doe"
                                name="client-name"
                                required
                            />
                            <Input
                                type="email"
                                label="Email"
                                placeholder="5RJpJ@example.com"
                                name="client-email"
                                required
                            />
                            <Input
                                type="text"
                                label="Enterprise"
                                placeholder="MAAK CORP"
                                name="client-company"
                                required
                            />
                            <Input
                                type="tel"
                                label="Téléphone"
                                placeholder="xxx-xxx-xxxx"
                                name="client-tel"
                                required
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            />
                            <Textarea
                                variant="faded"
                                label="Description"
                                placeholder="Votre message..."
                                className="w-full col-span-2"
                                name='client-message'
                                rows={20}
                                required
                            />
                            <Button color="default" size="lg" className="col-span-2" type="submit">Envoyer</Button>
                        </div>
                    </form>

                </section>
            </CenteredLayout>
        </div>
    );
}
