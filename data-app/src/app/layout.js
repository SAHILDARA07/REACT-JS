import "./globals.css";

export const metadata = {
  title: "User Management Dashboard",
  description: "Next.js Beginner CRUD Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}