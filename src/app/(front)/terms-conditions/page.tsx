import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const TermsAndConditionsPage = () => {
  return (
    <section className="section">
      <MaxWidthWrapper className="flex flex-col gap-5">
        <h1 className="text-3xl md:text-5xl font-bold">Terms and Conditions</h1>

        <h2 className="text-xl md:text-2xl font-semibold">1. Introduction</h2>

        <p>
          Welcome to Egadet! These terms and conditions outline the rules and
          regulations for the use of Egadet’s Website, located at [your website
          URL]. By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use Egadet if you do not agree to take
          all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">
          2. Intellectual Property Rights
        </h2>
        <p>
          Unless otherwise stated, Egadet and/or its licensors own the
          intellectual property rights for all material on Egadet. All
          intellectual property rights are reserved. You may access this from
          Egadet for your own personal use subjected to restrictions set in
          these terms and conditions.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold">3. User Accounts</h2>
        <p>When you create an account on our website, you agree to:</p>
        <ul>
          <li>Provide accurate, current, and complete information.</li>
          <li>
            Maintain the security of your password and accept all risks of
            unauthorized access to your account.
          </li>
          <li>
            Notify us immediately if you suspect any breach of security or
            unauthorized use of your account.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold">
          4. Prohibited Activities
        </h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>Publishing any website material in any other media.</li>
          <li>
            Selling, sublicensing, and/or otherwise commercializing any website
            material.
          </li>
          <li>
            Using this website in any way that is or may be damaging to this
            website.
          </li>
          <li>
            Using this website in any way that impacts user access to this
            website.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold">
          5. Limitation of Liability
        </h2>
        <p>
          In no event shall Egadet, nor any of its officers, directors, and
          employees, be held liable for anything arising out of or in any way
          connected with your use of this website whether such liability is
          under contract. Egadet, including its officers, directors, and
          employees shall not be held liable for any indirect, consequential, or
          special liability arising out of or in any way related to your use of
          this website.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold">
          6. Indemnification
        </h2>
        <p>
          ou hereby indemnify to the fullest extent Egadet from and against any
          and/or all liabilities, costs, demands, causes of action, damages, and
          expenses arising in any way related to your breach of any of the
          provisions of these terms.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold">7. Governing Law</h2>
        <p>
          These terms will be governed by and interpreted in accordance with the
          laws of [Your Country], and you submit to the non-exclusive
          jurisdiction of the state and federal courts located in [Your Country]
          for the resolution of any disputes.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold">
          8. Changes to These Terms
        </h2>
        <p>
          Egadet reserves the right to revise these terms at any time as it sees
          fit, and by using this website you are expected to review these terms
          on a regular basis.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at admin@egadget.com.
        </p>
      </MaxWidthWrapper>
    </section>
  );
};

export default TermsAndConditionsPage;
