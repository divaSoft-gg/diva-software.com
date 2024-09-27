import { Button, Image, Spacer } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";

const HeroSection = () => {



    return (
        <CentredLayout>
            <section className="flex flex-row justify-between gap-8 dark">
                <div className="">
                    <h1 className="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight text-center text-black dark:text-white">
                        Payments tool for software companies
                    </h1>
                    <p className="max-w-2xl mb-6 text-lg font-light text-center text-gray-300 ">
                        From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                    </p>
                    <div className="flex justify-center ">

                        <Button variant="shadow" color="danger" radius="lg" >Get Started</Button>
                        <Spacer x={4} />
                        <Button variant="shadow" color="primary" radius="lg" >Contact Us</Button>
                    </div>
                </div>
                <Image src="images/hero-section/placeholder.jpg" className="" width={400} />
            </section>
        </CentredLayout>
    )
}



export default HeroSection;
