import "animate.css";
import "./globals.css";

export const metadata = {
  title: "BookNest | Mango Bookstall",
  description: "A cozy digital library for stories, tech, and science books.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light" 
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[#fffaf3] text-[#28170c]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
