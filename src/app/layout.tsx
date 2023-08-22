import Lookup from "@/components/Lookup";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
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
                <nav className="flex gap-4 flex-wrap py-2.5">
                  <Link href="/voting">
                    <div className="group cursor-pointer flex flex-col gap-2.5 ">
                      <div className="border-4 border-indigo-300/60 group-hover:border-indigo-300 w-[140px] h-[200px] flex justify-center items-center bg-indigo-300 rounded-2xl ">
                        <Image
                          src="/vote-table.png"
                          width={100}
                          height={100}
                          alt="vote table"
                        />
                      </div>
                      <button className="w-full bg-white group-hover:bg-red-100 rounded-lg py-2.5 text-rose-400 text-xs font-medium tracking-widest">
                        VOTING
                      </button>
                    </div>
                  </Link>
                  <Link href="/breeds">
                    <div className="group cursor-pointer flex flex-col gap-2.5">
                      <div className="border-4 border-green-300/60 group-hover:border-green-300 w-[140px] h-[200px] flex justify-center items-center bg-green-300 rounded-2xl">
                        <Image
                          src="/pet-breeds.png"
                          width={100}
                          height={100}
                          alt="cat"
                        />
                      </div>
                      <button className="w-full bg-white group-hover:bg-red-100 rounded-lg py-2.5 text-rose-400 text-xs font-medium tracking-widest">
                        BREEDS
                      </button>
                    </div>
                  </Link>
                  <Link href="/gallery">
                    <div className="group cursor-pointer flex flex-col gap-2.5 ">
                      <div className="border-4 border-amber-200/60 group-hover:border-amber-200 w-[140px] h-[200px] flex justify-center items-end bg-amber-200 rounded-2xl">
                        <Image
                          src="/images-search.png"
                          width={100}
                          height={100}
                          alt="hand holds phone"
                        />
                      </div>
                      <button className="w-full bg-white group-hover:bg-red-100 rounded-lg py-2.5 text-rose-400 text-xs font-medium tracking-widest">
                        GALLERY
                      </button>
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Lookup />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
