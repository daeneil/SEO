import Signin from "@/components/Auth/Signin";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign In | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const SigninPage = () => {
  return (
    <>
      <Separator className="my-4" />
      <Signin />
      <Separator className="my-4"  />
    </>
  );
};

export default SigninPage;