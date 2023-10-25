/* eslint-disable react/no-children-prop */
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ICAP test task",
  description: "project frontend react-next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          <main className="flex justify-center px-0 md:px-10 py-10">
            {children}
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
