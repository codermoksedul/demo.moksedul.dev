import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moksedul Islam",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* noindex tag */}
        <meta name="robots" content="noindex" />
      </head>
      <body>{children}</body>
    </html>
  );
}
