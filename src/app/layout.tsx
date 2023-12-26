import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Home Pod",
  description: "Organize your home your way",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function Header() {
  return (
    <header className="flex justify-between p-5 text-white">
      <h1>Home Pod</h1>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]`}
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <ClerkProvider>
          <TRPCReactProvider cookies={cookies().toString()}>
            <Header />
            {children}
          </TRPCReactProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
