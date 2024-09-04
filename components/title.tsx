import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: "800" });

export function Title() {
  return <div className={syne.className}>STOCKA</div>;
}
