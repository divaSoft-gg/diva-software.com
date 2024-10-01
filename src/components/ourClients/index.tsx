import { OUR_CLIENTS } from "../../assets/data"
import SectionsTitle from "../shared/sectionTitle"
import CenteredLayout from "../ui/centredLayout"

export default function OurClients() {

    return (
        <CenteredLayout>
            <section className="py-8 my-20">
                <div className="px-5 mx-auto space-y-10 max-w-7xl sm:px-10 md:px-12 lg:px-5">
                    <SectionsTitle title='Our Clients' mb={'mb-20'} paragraph="More than 140+ businesses have trusted Squareboat to grow using our design and technology expertise." />
                    <div className="flex flex-wrap justify-center gap-4">
                        {
                            OUR_CLIENTS.map((logo, index) => (
                                <div className="p-4 rounded-lg sm:p-5 group" key={index}>
                                    <img src={logo.logo} width={100} height={60} alt={logo.name} className="w-auto duration-200 ease-linear opacity-50 h-7 sm:h-10 group-hover:opacity-100 group-hover:scale-105" />
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </section>
        </CenteredLayout>

    )
}

