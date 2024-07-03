import "src/app/globals.css";

import { Metadata } from "next";

import { Footer } from "./footer";
import { Header } from "./Header";

export const revalidate = 3600 // revalidate at most every hour

export const metadata: Metadata = {
  title: {
    default: "Moment - White Label",
    template: "%s | Moment",
  },
  description: "Moment take home assignment",
  openGraph: {
    type: "website",
    title: "Moment",
    description: "Moment take home assignment",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-white">
        <div className="h-screen w-full">
          <div className="h-full flex flex-col justify-center items-center">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
