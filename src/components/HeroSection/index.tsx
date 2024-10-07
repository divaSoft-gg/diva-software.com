import { Button, Image, Spacer } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";

const HeroSection = () => {



    return (
        <CentredLayout>
            <section id="hero-section" className="flex flex-row justify-between gap-8 my-16 dark">
                <div className="flex flex-col gap-8">
                    <h1 className="max-w-2xl mb-4 text-6xl font-semibold tracking-tight text-left text-black dark:text-white">
                        Design. Develop. Deliver.
                    </h1>
                    <p className="max-w-2xl mb-6 text-lg font-light text-left text-gray-300 ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia vero officiis explicabo accusamus eius impedit soluta doloremque mollitia veniam officia, quam unde omnis, ipsum incidunt dolorum sint sapiente minima perferendis at fuga dolor natus! Aperiam molestiae ut ipsa nisi praesentium.
                    </p>

                    <Button variant="flat" color="warning" radius="lg" size="lg" className="w-fit">Contact Us</Button>
                </div>
                <Image src="images/hero-section/placeholder.jpg" width={400} />
            </section>
        </CentredLayout>
    )
}



export default HeroSection;
