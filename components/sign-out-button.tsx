"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "./ui/button";

export const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    <Button variant="outline" onClick={() => signOut({ redirectUrl: "/" })}>
      Logout
    </Button>
  );
};
