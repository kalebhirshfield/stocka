import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-toggle";
import { ClerkProvider, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Syne } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { dark } from "@clerk/themes";

const karla = Karla({ subsets: ["latin"] });
export const syne = Syne({ subsets: ["latin"], weight: "800" });

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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={karla.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="w-full h-[10dvh] bg-background fixed drop-shadow-md">
              <div className="flex flex-row p-5 justify-between">
                <div className="flex flex-col justify-center">
                  <SignedOut>
                    <Link href="/sign-in">
                      <Button
                        variant="outline"
                        className="bg-gradient-to-bl from-primary to-yellow-600 hover:bg-gradient-to-br text-background"
                      >
                        Login
                      </Button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <div className="pr-5 align-middle">
                      <UserButton />
                    </div>
                  </SignedIn>
                </div>
                <h1 className="text-primary text-4xl hidden md:block">
                  <div className={syne.className}>STOCKA</div>
                </h1>
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
