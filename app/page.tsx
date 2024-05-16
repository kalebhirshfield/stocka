import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"], weight: "800" });

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-[50dvh]">
      <h1 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl transition-all">
        <div className={syne.className}>STOCKA</div>
      </h1>
    </main>
  );
}
