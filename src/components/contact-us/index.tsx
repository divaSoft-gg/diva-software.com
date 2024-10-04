import { Button, Input, Textarea } from "@nextui-org/react";
import CenteredLayout from "../ui/centredLayout";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { CONTACT_US_METHODS, HOME_PAGE_COPY } from "../../assets/data";
import { IContactUsMethods } from "../../common/types";
import { LatLngTuple } from "leaflet";
import './index.css';



export default function ContactUs() {

    const LEAFLET_CENTER_MAP: LatLngTuple = [35.8355, 10.594233534131954];

    const MARKER_POSITION: LatLngTuple = [35.835150953310574, 10.594233534131954];

    return (
        <CenteredLayout>
            <div className="w-full h-[500px] relative flex flex-row gap-12">

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
                            <Popup>We are here!</Popup>
                        </Marker>
                    </MapContainer>

                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-70 gradientOverlay"></div>

                    <div className="absolute top-0 left-0 z-10 flex flex-col w-full h-full gap-24 p-8">
                        <div>
                            <h1 className="text-4xl font-bold leading-normal text-left text-white">{HOME_PAGE_COPY.contactUs.title}</h1>

                            <p className="text-lg leading-8 text-left text-wrap muted">{HOME_PAGE_COPY.contactUs.subTitle}</p>
                        </div>
                        <ul className="flex flex-col w-full gap-8 list-none ">
                            {CONTACT_US_METHODS.map((element: IContactUsMethods, index: number) => (
                                <li key={index} className="flex flex-col gap-1 ">
                                    <h6 className="text-xs font-semibold text-white ">{element.title}</h6>
                                    <span className="text-sm font-normal text-white">{element.value}</span>
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
                            name='client-message'
                            rows={20}
                            required
                        />
                        <Button color="default" size="lg" className="text-black bg-white light:text-white light:bg-black" type="submit">Envoyer</Button>
                    </div>
                </form>

            </div>
        </CenteredLayout>
    )
}
