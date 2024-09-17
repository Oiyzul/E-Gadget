import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UserForm from "../../_components/UserForm";
import UserNav from "../../_components/UserNav";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await auth();
  if (!session) {
    return redirect("/unauthorized");
  }
  return (
    <MaxWidthWrapper>
      <UserNav />
      <UserForm />
    </MaxWidthWrapper>
  );
};

export default ProfilePage;
