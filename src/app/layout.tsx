/* eslint-disable react/no-children-prop */
//"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ReduxProvider } from "@/redux/provider";
import MainContent from "./MainContent";

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
        <ReduxProvider>
          <MainContent children={children} />
        </ReduxProvider>
      </body>
    </html>
  );
}
