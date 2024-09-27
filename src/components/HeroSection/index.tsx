import { Button, Image, Spacer } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";

const HeroSection = () => {



    return(
        <CentredLayout>

<section className="dark">
    <div className="grid w-full lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="justify-center pl-5 mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl xl:text-6xl dark:text-white">
                Payments tool for software companies
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
            </p>
            <div className="flex justify-center ">

            <Button variant="shadow" color="danger" radius="lg" >Get Started</Button>
            <Spacer x={4}/>
            <Button variant="shadow" color="primary" radius="lg" >Contact Us</Button>
            </div>
        </div>

        <div className=" lg:mt-0 lg:col-span-5 lg:flex place-self-center">
            <Image src="src/assets/hero-section/placeholder.jpg" />

                   </div>
    </div>
</section>
        </CentredLayout>
    )
}



export default HeroSection;
