import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UserForm from "../_components/UserForm";
import UserNav from "../_components/UserNav";

const ProfilePage = () => {
  return (
    <MaxWidthWrapper>
      <UserNav />
      <UserForm />
    </MaxWidthWrapper>
  );
};

export default ProfilePage;
