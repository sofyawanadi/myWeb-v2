import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { StyledRoot } from "./StyledRoot";
const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Sofyan Web",
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
            <title>
               Backend Developer & Full-Stack Engineer | My Portfolio
            </title>
            <meta
               name="description"
               content="Hire an experienced backend developer with expertise in Node.js, Golang, and PostgreSQL. See my portfolio for high-quality web applications."
            />
            <meta
               name="keywords"
               content="backend developer, software engineer, full-stack developer, web development, Golang, PostgreSQL, programmer, purwokerto, sofyan ,next-js, api, react, web, testing, postman, odoo, adonis, javascript, typescript "
            />
         </head>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <AppRouterCacheProvider>
               <StyledRoot>{children}</StyledRoot>
            </AppRouterCacheProvider>
         </body>
      </html>
   );
}
