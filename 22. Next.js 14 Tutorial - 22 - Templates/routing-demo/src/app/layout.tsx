import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: {
    default: "Next.js",
    absolute: "",
    template: "%s | Next.js",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <p>This is the header</p>
        </header>
        {children}
        <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
          <p>This is the footer</p>
        </footer>
      </body>
    </html>
  );
}
