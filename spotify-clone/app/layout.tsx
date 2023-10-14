import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SuperbaseProvider from "@/providers/SuperbaseProvider";
import ModalProvider from "@/providers/ModalProvider";
import UserProvider from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify-Clone",
  description: "Listen to Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
          <SuperbaseProvider>
            <UserProvider>
              <ModalProvider />
              <Sidebar>{children}</Sidebar>
            </UserProvider>
          </SuperbaseProvider>
      </body>
    </html>
  );
}
