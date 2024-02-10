import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./providers";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quizee2.0",
  description: "Quiz platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="w-full h-screen flex flex-col">
            <Navbar />
            <div className="w-full h-full">
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
