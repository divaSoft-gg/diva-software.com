import { Button, Input, Textarea } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { CONTACT_US_METHODS, LEAFLET_CENTER_MAP, MARKER_POSITION } from "../../assets/data";
import SectionsTitle from "../shared/sectionTitle";



export default function ContactUs() {


    return (
        <div className="bg-section-background">
            <CenteredLayout>
                <SectionsTitle title="Contact Us" subtitle="Your Questions, Our Answers" />
                <section className="grid grid-cols-[500px_1fr] items-center gap-8 py-8">
                    <div className="flex flex-col items-center justify-center gap-8 ">
                        <div className="grid grid-rows-3 gap-4 px-4">
                            {CONTACT_US_METHODS.map((element) => (
                                <div key={element.id} className="flex items-center gap-6">
                                    <element.icon className="w-6 h-6 text-white" />  {/* Correctly render the icon */}
                                    <span className="text-sm">{element.title}</span>
                                </div>
                            ))}

                        </div>
                        <MapContainer
                            center={LEAFLET_CENTER_MAP}
                            zoom={15}
                            scrollWheelZoom={false}
                            className="h-[200px] w-[400px]"

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



                    <div className="align-middle ">
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
