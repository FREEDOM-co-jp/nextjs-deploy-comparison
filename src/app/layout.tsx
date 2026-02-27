import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Deploy Comparison",
  description: "Comparing deployment targets for Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
