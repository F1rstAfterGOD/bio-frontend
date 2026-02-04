import Loader from "@/app/components/ui/Loader";
import "./globals.css";
import { satoshi, inter } from "@/app/lib/fonts";
import Header from "@/app/components/layout/Header";
import PageTransition from "@/app/components/layout/PageTransition";
import Cursor from "@/app/components/ui/Cursor";
import Ambient from "@/app/components/ui/Ambient";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${inter.variable} font-body bg-black text-white`}
      >
        <Loader />
        <Ambient />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Cursor />
      </body>
    </html>
  );
}

