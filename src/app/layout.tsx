import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { profileData } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${profileData.name} — ${profileData.role}`,
    template: `%s | ${profileData.name}`,
  },
  description: `${profileData.name} is a ${profileData.role} and Computer Science student (graduating ${profileData.education.expectedGraduation}) based in ${profileData.location}, focused on backend systems, clean architecture, and practical software solutions.`,
  keywords: [
    "Ramzy Ayman",
    "Software Engineer",
    "Cairo",
    "Egypt",
    "Computer Science",
    "Backend Engineer",
    "ASP.NET Core",
    "Angular",
    "MEAN Stack",
    "Python",
    "Web Developer",
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramzyayman.dev",
    title: `${profileData.name} — ${profileData.role}`,
    description: `${profileData.name} — Software Engineer & Computer Science student in ${profileData.location}. Building practical software with a focus on backend systems.`,
    siteName: `${profileData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} — ${profileData.role}`,
    description: `${profileData.name} — Software Engineer & Computer Science student in ${profileData.location}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground antialiased selection:bg-emerald-500/20 selection:text-emerald-900 dark:selection:text-emerald-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
