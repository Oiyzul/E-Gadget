import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import UserForm from "../../_components/UserForm";

const ProfilePage = async () => {
  const session = await auth();
  if (!session) {
    return redirect("/unauthorized");
  }
  return (
    <MaxWidthWrapper>
      <UserForm />
    </MaxWidthWrapper>
  );
};

export default ProfilePage;
