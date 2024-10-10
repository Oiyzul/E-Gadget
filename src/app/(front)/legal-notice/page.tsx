import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const LegalNoticePage = () => {
  return (
    <section className="section">
      <MaxWidthWrapper className="flex flex-col gap-5">
        <h1 className="text-3xl md:text-5xl font-bold">Legal Notice</h1>

        <h2 className="text-xl md:text-2xl font-semibold">1. Introduction</h2>

        <p>
          Welcome to E-Gadet. By accessing and using this website, you agree to
          comply with and be bound by the following terms and conditions of use,
          which together with our privacy policy govern E-Gadet’s relationship
          with you in relation to this website.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">
          2. Intellectual Property Rights
        </h2>
        <p>
          All content on this website, including but not limited to text,
          graphics, logos, icons, images, audio clips, and software, is the
          property of E-Gadet or its content suppliers and is protected by
          international copyright laws. Unauthorized use of this content is
          strictly prohibited.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold">
          3. Use of the Website
        </h2>
        <p>
          You may use this website for lawful purposes only. You must not use
          this website in any way that breaches any applicable local, national,
          or international law or regulation.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold">
          4. Limitation of Liability
        </h2>
        <p>
          E-Gadet will not be liable for any loss or damage arising from the use
          of this website. This includes, without limitation, direct, indirect,
          incidental, punitive, and consequential damages.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold">
          5. Links to Other Websites
        </h2>
        <p>
          This website may contain links to other websites. These links are
          provided for your convenience to provide further information. They do
          not signify that we endorse the website(s). We have no responsibility
          for the content of the linked website(s).
        </p>
        <h2 className="text-xl md:text-2xl font-semibold">
          6. Changes to This Notice
        </h2>
        <p>
          E-Gadet reserves the right to change this legal notice at any time.
          Any changes will be posted on this page, and it is your responsibility
          to review this page regularly to ensure you are aware of any changes.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold">
          7. Contact Information
        </h2>
        <p>
          If you have any questions about this legal notice, please contact us
          at admin@egadget.com.
        </p>
      </MaxWidthWrapper>
    </section>
  );
};

export default LegalNoticePage;
