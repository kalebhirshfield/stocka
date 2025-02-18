import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-[80lvh] w-full pt-10">
      <SignIn path="/sign-in" />
    </div>
  );
}
