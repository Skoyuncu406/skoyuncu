import "./globals.css";

export const metadata = {
  title: "Selçuk Koyuncu | Web Developer",
  description: "Modern, hızlı ve profesyonel web siteleri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
