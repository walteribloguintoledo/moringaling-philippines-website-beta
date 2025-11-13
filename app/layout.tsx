import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: {
    default: "Moringaling Philippines Foundation Inc.",
    template: "%s | Moringaling Philippines Foundation Inc."
  },
  description: "Promoting moringa cultivation and health benefits in the Philippines. Join our community to learn about the miracle tree and its impact on Filipino wellness and agriculture.",
  keywords: ["moringa", "malunggay", "Philippines", "foundation", "health", "nutrition", "cultivation"],
  authors: [{ name: "Moringaling Philippines Foundation Inc." }],
  creator: "Avasia Information Systems Inc.",
  publisher: "Moringaling Philippines Foundation Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Moringaling Philippines Foundation Inc.",
    description: "Promoting moringa cultivation and health benefits in the Philippines",
    siteName: "Moringaling Philippines Foundation Inc.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moringaling Philippines Foundation Inc."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Moringaling Philippines Foundation Inc.",
    description: "Promoting moringa cultivation and health benefits in the Philippines",
    images: ["/og-image.png"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers session={session}>
          {children}
        </Providers>
      </body>
    </html>
  );
}