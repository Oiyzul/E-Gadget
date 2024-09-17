import { auth } from "@/lib/auth";
import AddProductForm from "./AddProductForm";
import { redirect } from "next/navigation";

const AddProductPage = async () => {
  const session = await auth();
  if (!session || !session.user.isAdmin) {
    return redirect("/unauthorized");
  }

  return (
    <div>
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;
