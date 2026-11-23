import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatbotPopup from "./components/ChatbotPopup";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-v2-sage-three.vercel.app"),
  title: {
    default: "Adithyan K S — Frontend Developer & Python Explorer",
    template: "%s | Adithyan K S",
  },
  description:
    "Thoughtful interfaces. Solid foundations. Explore Adithyan’s React and Next.js projects and his current Python backend journey with FastAPI.",
  openGraph: {
    title: "Adithyan K S — Developer Portfolio",
    description:
      "Frontend craft meets backend curiosity. React, Next.js, Python, and FastAPI.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <ChatbotPopup />
      </body>
    </html>
  );
}
