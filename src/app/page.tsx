"use client";

import { useAuth } from "@/components/provider/auth-provider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React, { useContext } from "react";

const Home = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  return (
    <div className="flex flex-col gap-2 justify-center items-center py-3 mt-5">
      <h2 className="text-2xl font-bold">Home Page</h2>
      <Button asChild>
        <Link href="/chat">Go to chat</Link>
      </Button>

      <Button
        variant="outline"
        onClick={() => setIsAuthenticated(!isAuthenticated)}
      >
        {isAuthenticated ? "Log out" : "Log in"}
      </Button>
    </div>
  );
};

export default Home;
