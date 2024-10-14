import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { Toaster } from "@/components/ui/sonner";
import HeartsModal from "@/components/modals/hearts-modal";
import PracticeModal from "@/components/modals/practice-modal";
import ExitModal from "@/components/modals/exit-modal";
import { auth } from "@/auth";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingua",
  description: "Learn, practice and master new languages",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          <HeartsModal />
          <PracticeModal />
          <ExitModal />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
