import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import "./globals.css";
import ReactQueryWrapper from "@/wrappers/ReactQueryWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "First NextJS App",
  description: "Create sample nextjs application for learning purpose",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReactQueryWrapper>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </ReactQueryWrapper>
    </html>
  );
}
