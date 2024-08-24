import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SuperbaseProvider from "@/providers/SuperbaseProvider";
import ModalProvider from "@/providers/ModalProvider";
import UserProvider from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify-Clone",
  description: "Listen to Music",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const userSongs = await getSongsByUserId();

  

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
          <SuperbaseProvider>
            <UserProvider>
              <ModalProvider />
              <Sidebar songs={userSongs}>
                {children}
              </Sidebar>
              <Player />
            </UserProvider>
          </SuperbaseProvider>
      </body>
    </html>
  );
}
