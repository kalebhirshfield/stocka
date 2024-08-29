"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";

export const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    <Button variant="outline" onClick={() => signOut({ redirectUrl: "/" })}>
      <LogOutIcon className="" />
    </Button>
  );
};
