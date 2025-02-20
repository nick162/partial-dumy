import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./assets/fonts";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
// import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Portfolio with Tailwind",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        {/* </ThemeProvider> */}
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
