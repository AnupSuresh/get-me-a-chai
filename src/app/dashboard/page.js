"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);
  return (
    <div className="container mx-auto p-10 pt-6 flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-center pb-2">
        Welcome to your Dashboard
      </h1>
      <ul className="flex flex-col gap-3 container max-w-2xl">
        <li>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-2 rounded-lg bg-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-slate-600 mt-2 h-8"
          />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-2 rounded-lg bg-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-slate-600 mt-2 h-8"
          />
        </li>
        <li>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="p-2 rounded-lg bg-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-slate-600 mt-2 h-8"
          />
        </li>
        <li>
          <label htmlFor="pf">Profile Picture</label>
          <input
            type="text"
            name="pf"
            id="pf"
            className="p-2 rounded-lg bg-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-slate-600 mt-2 h-8"
          />
        </li>
        <li>
          <label htmlFor="cover">Cover Picture</label>
          <input
            type="text"
            name="cover"
            id="cover"
            className="p-2 rounded-lg bg-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-slate-600 mt-2 h-8"
          />
        </li>
        <li>
          <label htmlFor="raz">Razorpay Credentials</label>
          <input
            type="text"
            name="raz"
            id="raz"
            className="p-2 rounded-lg bg-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-slate-600 mt-2 h-8"
          />
        </li>

        <li>
          <button
            type="button"
            className="text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg text-sm px-5 py-2.5 text-center w-full mt-2"
          >
            Pay
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
