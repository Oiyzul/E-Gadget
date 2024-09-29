import { redirect } from "next/navigation";
import Container from "./Container";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "Checkout",
};

const CheckoutPage = async () => {
  const session = await auth();
  if (!session || !session.user._id) {
    return redirect("/unauthorized");
  }

  return <Container />;
};

export default CheckoutPage;
