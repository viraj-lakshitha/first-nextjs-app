import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import "./globals.css";
import ReactQueryWrapper from "@/wrappers/ReactQueryWrapper";
import ContextWrapper from "@/wrappers/ContextWrapper";

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
        <ContextWrapper>
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </ContextWrapper>
      </ReactQueryWrapper>
    </html>
  );
}
