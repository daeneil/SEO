import Signup from "@/components/Auth/Signup";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const SignupPage = () => {
  return (
    <>
      <Separator className="my-4" />
      <Signup />
      <Separator className="my-4" />
    </>
  );
};

export default SignupPage;
