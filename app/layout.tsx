import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-toggle";
import { ClerkProvider } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { Syne } from "next/font/google";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { User2Icon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

const karla = Karla({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"], weight: "800" });

export const metadata: Metadata = {
  title: "Stocka",
  description: "Simple stock management system for sole traders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={karla.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="w-full bg-background fixed drop-shadow-md">
              <div className="flex flex-row p-5">
                <div className="flex flex-col justify-center">
                  <SignedOut>
                    <Popover>
                      <PopoverTrigger>
                        <Skeleton className="flex w-10 h-10 rounded-full flex-col justify-center">
                          <div className="flex flex-row justify-center">
                            <User2Icon color="#facc15" />
                          </div>
                        </Skeleton>
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="flex justify-between space-x-4">
                          <Link href="/sign-up">
                            <Button>Sign up</Button>
                          </Link>
                          <Link href="/sign-in">
                            <Button variant="outline">Login</Button>
                          </Link>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
                <h1 className="text-primary text-4xl pl-5 hidden md:block">
                  <div className={syne.className}>STOCKA</div>
                </h1>
                <SignedOut>
                  <Skeleton className="h-10 w-full mx-5" />
                </SignedOut>
                <SignedIn>
                  <Input type="search" placeholder="Search" className="mx-5" />
                </SignedIn>
                <div>
                  <ModeToggle />
                </div>
              </div>
              <Separator />
            </div>
            <div className="p-5 pt-16">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
