import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronak Patel, Software Developer",
  description:
    "Ronak Patel, Software Developer in Canada. Python, JavaScript, TypeScript, React, Node.js, Docker, AWS, Linux.",
  openGraph: {
    title: "Ronak Patel, Software Developer",
    description: "2 years building web apps, REST APIs and backend services. Open to co-op and new-grad roles in Canada.",
    url: "https://patelronak-ca.github.io",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
