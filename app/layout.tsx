import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vitor Ribeiro — Software Engineer",
  description:
    "Software Engineer specializing in JavaScript, React, TypeScript, Next.js, Node.js and Angular. Available for freelance and full-time opportunities.",
  keywords: [
    "Vitor Ribeiro",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Frontend Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Vitor Ribeiro", url: "https://vrscode.com.br" }],
  creator: "Vitor Ribeiro",
  openGraph: {
    title: "Vitor Ribeiro — Software Engineer",
    description:
      "Software Engineer specializing in JavaScript, React, TypeScript, Next.js and Node.js.",
    url: "https://vrscode.com.br",
    siteName: "Vitor Ribeiro Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitor Ribeiro — Software Engineer",
    description:
      "Software Engineer specializing in JavaScript, React, TypeScript, Next.js and Node.js.",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
