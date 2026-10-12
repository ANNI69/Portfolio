import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import MotionConfigProvider from "@/components/motion/MotionConfigProvider";
import ScrollProgress from "@/components/motion/ScrollProgress";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans, JetBrains_Mono as FontMono, Space_Grotesk as FontDisplay } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

const fontDisplay = FontDisplay({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontDisplay.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-gh-3 focus:bg-[#121315] focus:px-4 focus:py-2 focus:text-sm"
            >
              Skip to content
            </a>
            <MotionConfigProvider>
              <ScrollProgress />
              <Navbar />
              <div id="main">{children}</div>
              <Footer />
            </MotionConfigProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
