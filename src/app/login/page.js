"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import ButtonGroup from "./../../components/ButtonGroup";
import { useRouter } from "next/navigation";
const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);
  return (
    <div className="text-white container mx-auto p-10">
      <h2 className="font-bold text-xl md:text-3xl text-center">
        Login to get your fans to support you!
      </h2>
      <ButtonGroup/>
    </div>
  );
};

export default Login;
