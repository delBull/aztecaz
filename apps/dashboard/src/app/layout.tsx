import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThirdwebProviderWrapper from "../components/ThirdwebProviderWrapper";
import AuthGuard from "../components/AuthGuard";
import { RoleProvider } from "../context/RoleContext";
import { AnalyticsProvider, PageViewTracker } from "@repo/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aztecaz Dashboard",
  description: "Panel de control para gestión de propiedades y organización.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#0E0E17' }}>
      <body
        className={`${inter.className} antialiased bg-[#0E0E17] text-white`}
      >
        <ThirdwebProviderWrapper>
          <AuthGuard>
            <RoleProvider>
              <AnalyticsProvider>
                <PageViewTracker />
                {children}
              </AnalyticsProvider>
            </RoleProvider>
          </AuthGuard>
        </ThirdwebProviderWrapper>
      </body>
    </html>
  );
}
