import CenteredLayout from "../ui/centredLayout";

import { ContactUsForm } from "@aymen_diva/diva-contact-form";

export default function ContactUs() {
  return (
    <section id="contact-us">
      <CenteredLayout>
        <ContactUsForm root="divaSoftware" variant="variantOne" />
      </CenteredLayout>
    </section>
  );
}
