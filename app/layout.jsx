import "./globals.css";
import { Inter } from 'next/font/google'
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const graphik = local({
  src: [
    {
      path: "/fonts/graphik.woff",
      weight: 600,
      style: "normal",
    }
  ],
  variable: "--font-graphik",
});

export const metadata = {
  title: "Taskade",
  description: "Taskade is a simple project and task manager. Perfect for remote teams. Unleash your team productivity with projects task list and collaboration tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${graphik.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
