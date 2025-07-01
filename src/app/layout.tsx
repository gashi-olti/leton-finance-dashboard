import "@/styles/globals.css";

import { Metadata } from "next";
import { PropsWithChildren } from "react";
import localFont from "next/font/local";

import { getURL } from "@/utils/helpers";
import { cn } from "@/lib/utils";
import { ModeProvider } from "@/providers/ModeProvider";

const title = "Leton Finance Dashboard";
const description =
  "A modern finance dashboard for Leton Finance users to manage their assets and transactions.";

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
};

const fontSans = localFont({
  src: [
    {
      path: "../../public/fonts/InterTight-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterTight-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterTight-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterTight-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterTight-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterTight-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterTight-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
