import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Home - PayJustNow",
  description: "Increase your sales with split payment options and performance marketing. PayJustNow helps South African businesses boost revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
