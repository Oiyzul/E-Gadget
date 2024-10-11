import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Clock, Locate, Mail, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactUsPage = () => {
  return (
    <section className="section">
      <MaxWidthWrapper className="flex flex-col sm:flex-row justify-between gap-5 md:gap-10">
        <div className="flex-1">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">
              We&apos;re here to help you
            </h2>
            <p className="text-gray-500 dark-text-gray-300">
              Have a question, comment, or brilliant idea you&apos;d like to share?
              Send us a little note below - we love to hear from you and will
              always reply.
            </p>
          </div>

          <div className="flex justify-between gap-12">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <Phone size={40} />
                <p
                  className="font-semibold
              "
                >
                  Phone Number
                </p>
                <p>Call Us: 01011-011010</p>
              </div>
              <div className="flex flex-col gap-4">
                <Locate size={40} />
                <p className="font-semibold">Location</p>
                <p>
                  25/A, Road No- 2, Dhanmondi, <br /> Dhaka, 1205.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <Mail size={40} />
                <p className="font-semibold">Email</p>
                <p>egadget@egadget.com</p>
              </div>

              <div className="flex flex-col gap-4">
                <Clock size={40} />
                <p className="font-semibold">Opening Hours</p>
                <p>
                  Sat-Thu: 9:00 am - 8:00 pm <br /> Fri: 3:00 pm - 8:00 pm
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-5">
          <ContactForm />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactUsPage;
