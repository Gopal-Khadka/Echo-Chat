"use client";

import { Button } from "@/components/ui/button";
import { AuthContext } from "@/lib/auth-provider";
import Link from "next/link";

import React, { useContext } from "react";

const Home = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const handleLogin = () => {
    if (isLoggedIn) return logout;
    return login;
  };
  return (
    <div className="flex flex-col gap-2 justify-center items-center py-3 mt-5">
      <h2 className="text-2xl font-bold">Home Page</h2>
      <Button asChild>
        <Link href="/chat">Go to chat</Link>
      </Button>

      <Button variant="outline" onClick={() => handleLogin()}>
        {isLoggedIn ? "Log out" : "Log in"}
      </Button>
    </div>
  );
};

export default Home;
