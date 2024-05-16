import { Syne } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"], weight: "800" });

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-screen">
      <h1 className="flex justify-center xs:text-3xl sm:text-6xl md:text-7xl transition-all text-primary-foreground h-1/5">
        <div className={syne.className}>STOCKA</div>
      </h1>
      <div className="flex justify-center space-x-4">
        <Button>
          <Link href="/sign-up">Sign up</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button variant="outline">
          <Link href="/sign-in">Login</Link>
        </Button>
      </div>
    </main>
  );
}
