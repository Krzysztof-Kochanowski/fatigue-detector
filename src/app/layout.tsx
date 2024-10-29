import Sidebar from "@/components/sidebar";
import React from "react";
import "./globals.css";

export const metadata = {
  title: "Fatigue Detection App",
  description: "An app for detecting fatigue based on facial expressions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", height: "100vh" }}>
          <Sidebar />
          <main style={{ flexGrow: 1, padding: 0 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
