import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { textaAlt } from "./fonts";

export const metadata: Metadata = {
    title: {
        default: "Bhopal Film Festival",
        template: "%s | Bhopal Film Festival",
    },
    description:
        "Bhopal Film Festival celebrates independent cinema with screenings, events, and emerging filmmakers.",
    keywords: [
        "Bhopal Film Festival",
        "Film Festival India",
        "Bhopal Events",
        "Independent Cinema",
    ],
    metadataBase: new URL("https://thebhopalfilmfestival.com"),
    openGraph: {
        title: "Bhopal Film Festival",
        description:
            "Explore screenings, events, film submissions, and festival passes.",
        url: "https://thebhopalfilmfestival.com",
        siteName: "Bhopal Film Festival",
        images: [
            {
                url: "/icon.svg",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={textaAlt.variable}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased relative`}
            >
                {/* PAPER TEXTURE */}
                <div
                    className="fixed inset-0 pointer-events-none z-[99]"
                    style={{
                        backgroundImage: 'url("/assets/pp.png")',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        opacity: 0.65,
                        mixBlendMode: "multiply",
                        filter: "contrast(1.1) brightness(0.98)",
                    }}
                />

                {/* NAVBAR */}
                <Navbar />

                {/* PAGE CONTENT */}
                <div className="relative z-[1]">{children}</div>

                {/* FOOTER */}
                <Footer />
            </body>
        </html>
    );
}
