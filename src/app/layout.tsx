import Lookup from "@/components/Lookup";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetsPaw",
  description: "project for bootcamp 2023 frontend react-next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <main className="flex relative p-7 h-[100vh] w-full container mx-auto">
          <div className="flex justify-center w-1/2 h-full">
            <div className="flex flex-col gap-16">
              <Link href="/">
                <Image src="/logo.png" width={105} height={25} alt="logo" />
              </Link>
              <div className="flex flex-col gap-2.5">
                <p className="text-4xl font-medium">Hi!👋</p>
                <h2 className="text-xl font-normal text-neutral-400">
                  Welcome to MacPaw Bootcamp 2023
                </h2>
              </div>
              <div>
                <p className="text-xl font-medium">
                  Lets start using The Cat API
                </p>
                <Navigation />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-2.5">
            <Lookup />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
