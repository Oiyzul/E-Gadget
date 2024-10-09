import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import aboutImg1 from "@/assets/b1.jpg";
import aboutImg2 from "@/assets/b2.jpg";

const AboutUsPage = () => {
  return (
    <section className="section">
      <MaxWidthWrapper className="my-[70px] flex flex-col gap-[100px]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-[100px]">
          <div className="flex-1 relative">
            <Image src={aboutImg1} alt="" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-4xl font-semibold mb-5">
              About Us
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              Welcome to E-Gadget, your one-stop destination for the latest and
              greatest in mobile technology. Founded with a passion for
              innovation and a commitment to quality, we strive to bring you the
              best mobile devices from top brands around the world.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-[100px]">
          <div className="flex-1">
            <h3 className="text-2xl md:text-4xl font-semibold mb-5">
              Our Story
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              E-Gadget was founded by a team of tech enthusiasts who wanted to
              create a platform where people could easily find and purchase the
              best mobile phones. With years of experience in the tech industry,
              we have built strong relationships with manufacturers and
              suppliers to bring you the latest products at competitive prices.
            </p>
          </div>
          <div className="flex-1">
            <Image src={aboutImg2} alt="" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-[100px]">
          <div className="flex-1 relative">
            <Image src={aboutImg1} alt="" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-4xl font-semibold mb-5">
              Our Mission
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              At E-Gadget, our mission is to provide our customers with
              cutting-edge mobile phones that enhance their digital experience.
              We believe in the power of technology to transform lives, and we
              are dedicated to making the latest advancements accessible to
              everyone.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-[100px]">
          <div className="flex-1">
            <h3 className="text-2xl md:text-4xl font-semibold mb-5">
              Why Choose Us
            </h3>
            <ul className="text-gray-500 dark:text-gray-300 flex flex-col gap-2">
              <li>
                <span className="font-semibold">Wide Selection:</span> We offer
                a diverse range of mobile phones to suit every need and budget.
                Whether you’re looking for the latest flagship model or a
                reliable budget-friendly option, we’ve got you covered.
              </li>
              <li>
                <span className="font-semibold">Quality Assurance:</span> Every
                product we sell is thoroughly tested and comes with a warranty
                to ensure you get the best value for your money.
              </li>
              <li>
                <span className="font-semibold">Customer Support:</span> Our
                friendly and knowledgeable customer support team is always here
                to help you with any questions or concerns.
              </li>
              <li>
                <span className="font-semibold">Fast Shipping:</span> We
                understand the excitement of getting a new gadget, which is why
                we offer fast and reliable shipping options.
              </li>
            </ul>
          </div>
          <div className="flex-1 relative">
            <h3 className="text-2xl md:text-4xl font-semibold mb-5">
              Join Our Community
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              We invite you to join our growing community of tech lovers. Follow
              us on social media for the latest updates, exclusive offers, and
              tech tips. At eGadget, we are more than just a store; we are a
              community of people who share a love for technology. Thank you for
              choosing eGadget. We look forward to serving you!
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutUsPage;
