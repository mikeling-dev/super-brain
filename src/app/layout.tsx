import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./not-found";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Super Brain",
  description: "Your all-in-one AI powered brain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
