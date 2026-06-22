import "./globals.css";

export const metadata = {
  title: "Selçuk Koyuncu",
  description: "Project Management & Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
