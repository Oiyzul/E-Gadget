import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const DeliveryPolicyPage = () => {
  return (
    <section className="section">
      <MaxWidthWrapper className="flex flex-col gap-5">
        <h1 className="text-3xl md:text-5xl font-bold">Delivery Policy</h1>
        <h2 className="text-xl md:text-2xl font-semibold">Order Processing</h2>
        <ul>
          <li>
            <span className="font-semibold">Order Confirmation: </span>
            <span>
              Once your order is placed, you will receive an email confirmation.
              Please ensure all details are correct. If you notice any errors,
              contact our customer service immediately.
            </span>
          </li>
          <li>
            <span className="font-semibold">Processing Time: </span>
            <span>
              Orders are processed within 1-2 business days. Orders placed on
              weekends or holidays will be processed the next business day.
            </span>
          </li>
        </ul>
        <h2 className="text-xl md:text-2xl font-semibold">
          Shipping Methods and Delivery Times
        </h2>
        <ul>
          <li>
            <span className="font-semibold">Standard Shipping: </span>
            <span>Delivery within 5-7 business days.</span>
          </li>
          <li>
            <span className="font-semibold">Express Shipping: </span>
            <span>Delivery within 2-3 business days.</span>
          </li>
          <li>
            <span className="font-semibold">Overnight Shipping: </span>
            <span>Delivery by the next business day.</span>
          </li>
        </ul>
        <h2 className="text-xl md:text-2xl font-semibold">Shipping Costs</h2>
        <ul>
          <li>
            <span className="font-semibold">Standard Shipping: </span>
            <span>
              Free for orders over 30000 taka. A flat rate of 300 taka for orders under 30000 taka.
            </span>
          </li>
          <li>
            <span className="font-semibold">Express Shipping: </span>
            <span>500 taka flat rate.</span>
          </li>
          <li>
            <span className="font-semibold">Overnight Shipping:</span>
            <span>1000 taka flat rate.</span>
          </li>
        </ul>
        <h2 className="text-xl md:text-2xl font-semibold">
          International Shipping
        </h2>
        <p>Currently not available.</p>
        <h2 className="text-xl md:text-2xl font-semibold">Order Tracking</h2>
        <p>
          Once your order is shipped, you will receive a tracking number via
          email. You can use this number to track your order on our website or
          the carrier’s website.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold">Delivery Issues</h2>
        <ul>
          <li>
            <span className="font-semibold">Delayed or Lost Orders: </span>
            If your order is delayed or lost, please contact our customer
            service team. We will work with the carrier to resolve the issue as
            quickly as possible.
          </li>
          <li>
            <span className="font-semibold">Incorrect Address:</span>Ensure your
            shipping address is correct. We are not responsible for orders
            delivered to an incorrect address provided by the customer.
          </li>
          <li>
            <span className="font-semibold">Damaged Items:</span>If your item
            arrives damaged, please contact us within 48 hours of delivery with
            photos of the damage. We will arrange for a replacement or refund.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions or concerns about your delivery, please
          contact our customer service team at customer@egadget.com or call us
          at 00110-001101.
        </p>
      </MaxWidthWrapper>
    </section>
  );
};

export default DeliveryPolicyPage;
