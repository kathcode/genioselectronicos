import { Banner } from "@/components/Banner";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Workshop } from "@/components/Workshop";
import { ContactUs } from "@/components/ContactUs";

export default function Page() {
  return (
    <main>
      <Banner />
      <AboutUs />
      <Services />
      <Portfolio />
      <Workshop />
      <ContactUs />
    </main>
  );
}
