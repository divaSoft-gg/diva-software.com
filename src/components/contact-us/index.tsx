import { Button, Input, Textarea } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { CONTACT_US_METHODS, LEAFLET_CENTER_MAP, MARKER_POSITION } from "../../assets/data";
import SectionsTitle from "../shared/sectionTitle";
import { ContactUsMethods } from "../../common/types";



export default function ContactUs() {
    return (
        <div className="bg-section-background">
            <CenteredLayout>

                <SectionsTitle title="Contact Us" subtitle="Your Questions, Our Answers" />

                <section className="grid grid-cols-[500px_1fr] items-center gap-8">
                    <div className="flex flex-col items-end justify-center gap-4 ">
                        {/* Contact Methods Section */}
                        <div className="w-full">
                            <ul className="list-none">
                                {CONTACT_US_METHODS.map((element: ContactUsMethods) => (
                                    <li key={element.id} className="flex items-center my-4">
                                        <element.icon className="w-6 h-6 mx-2 text-white" />
                                        <span className="text-sm">{element.title}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        {/* Map Section */}
                        <MapContainer
                            center={LEAFLET_CENTER_MAP}
                            zoom={15}
                            scrollWheelZoom={false}
                            className="h-[200px] w-full"

                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={MARKER_POSITION}>
                                <Popup>
                                    Diva Software, Third Floor
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    <form
                        name="diva-software-submissions"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        className="my-12"
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
