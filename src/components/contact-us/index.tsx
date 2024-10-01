import { Button, Input, Textarea } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { LEAFLET_CENTER_MAP, MARKER_POSITION } from "../../assets/data";



export default function ContactUs() {
    return (
        <div className="bg-[#161616]">
            <CenteredLayout>
                <section className="flex flex-row justify-between gap-8 py-8">
                    <MapContainer
                        center={LEAFLET_CENTER_MAP}
                        zoom={15}
                        scrollWheelZoom={false}
                        className="flex-1 h-auto p-8"
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

                    <div className="flex-1 p-8">
                        <h2 className="text-2xl font-bold">Contact Us</h2>
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
                                <Button color="primary" size="lg" className="col-span-2" type="submit">Envoyer</Button>
                            </div>
                        </form>
                    </div>
                </section>
            </CenteredLayout>
        </div>
    );
}
