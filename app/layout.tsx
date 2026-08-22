import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "../components/site/Footer";
import Script from "next/script";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WN295SRM');
            `,
          }}
        />
        <link
          rel="preload"
          href="/fonts/Commissioner-VariableFont_slnt,wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WN295SRM"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
