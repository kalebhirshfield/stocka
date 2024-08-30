import { Syne } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { SignOutButton } from "@/components/sign-out-button";

const syne = Syne({ subsets: ["latin"], weight: "800" });

export default function Home() {
  return (
    <main className="grid h-[80vh] place-items-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-5xl md:text-7xl transition-all text-primary-foreground h-1/5">
          <div className={syne.className}>STOCKA</div>
        </h1>
        <SignedOut>
          <div className="flex items-center space-x-4">
            <Button>
              <Link href="/sign-up">Sign up</Link>
            </Button>
            <Button variant="outline">
              <Link href="/sign-in">Login</Link>
            </Button>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex flex-row space-x-4">
            <Button>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <SignOutButton />
          </div>
        </SignedIn>
      </div>
    </main>
  );
}
