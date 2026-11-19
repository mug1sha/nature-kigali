import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nature Kigali | Stay Close to Nature",
  description: "A calm boutique stay, garden dining and nature experiences in Nyarutarama, Kigali.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
