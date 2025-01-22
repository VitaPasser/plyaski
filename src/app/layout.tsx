import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plyaska",
  description: "Plyaska - це сервіс агрегатор танцювальних суспільств, це можливість розділяти цінність танців з іншими у найближчому до вас місці, за пару кликів і 5 хвилин.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`text-base antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
