import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import HeartsModal from "@/components/modals/hearts-modal";
import PracticeModal from "@/components/modals/practice-modal";
import ExitModal from "@/components/modals/exit-modal";

import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingua",
  description: "Learn, practice and master new languages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          <HeartsModal />
          <PracticeModal />
          <ExitModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
