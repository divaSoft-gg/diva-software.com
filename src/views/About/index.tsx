
import ContactUs from "../../components/contact-us";
import IntroductionSection from "../../components/introductionSection";
import OurTeam from "../../components/ourTeam";

export default function About() {



    return (
        <div className="flex flex-col gap-10">
            <IntroductionSection />
            <OurTeam />
            <ContactUs />
        </div>

    )

}
