import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Audiophile | Premium Audio Equipment",
  description:
    "Experience premium audio with our curated collection of headphones, speakers, and earphones.",
  authors: [{ name: "Barrie Freyre" }],
  icons: {
    icon: "/assets/favicon-32x32.png",
  },
  other: {
    linkedin: "https://www.linkedin.com/in/barriefreyre/",
    github: "https://github.com/barriedirk",
    frontendmentor: "https://www.frontendmentor.io/profile/barriedirk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Barrie Freyre",
              sameAs: [
                "https://www.linkedin.com/in/barriefreyre/",
                "https://github.com/barriedirk",
                "https://www.frontendmentor.io/profile/barriedirk",
              ],
            }),
          }}
        />
        <link rel="me" href="https://www.linkedin.com/in/barriefreyre/" />
        <link rel="me" href="https://github.com/barriedirk" />
        <link
          rel="me"
          href="https://www.frontendmentor.io/profile/barriedirk"
        />
      </head>
      <body
        className="min-h-full flex flex-col antialiased"
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
