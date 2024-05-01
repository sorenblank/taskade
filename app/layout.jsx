import "./globals.css";

export const metadata = {
  metadataBase: "https://taskade-nextjs.vercel.app", // Base URL for the website
  title: "Taskade", // Title of the website
  description: "Taskade is a simple project and task manager. Perfect for remote teams. Unleash your team productivity with projects task list and collaboration tools.", // Description of the website
  image: "https://taskade-nextjs.vercel.app/og-image.png", // Image for the website
  keywords: ["Taskade","Task","ade"], // Keywords for the website
  openGraph: { // Open Graph data for the website
    title: "Taskade",
    description: "Taskade is a simple project and task manager. Perfect for remote teams. Unleash your team productivity with projects task list and collaboration tools.",
    url: "https://taskade-nextjs.vercel.app",
    type: "website",
    siteName: "Taskade",
    images: [
      {
        url: "https://taskade-nextjs.vercel.app/og-image.png", // Open Graph image for the website
      },
    ],
  },
  twitter: { // Twitter card data for the website
    title: "Taskade",
    description: "Taskade is a simple project and task manager. Perfect for remote teams. Unleash your team productivity with projects task list and collaboration tools.",
    url: "https://taskade-nextjs.vercel.app",
    domain: "taskade-nextjs.vercel.app",
    cardType: "summary_large_image",
    site: "@soren_blank",
    images: [
      {
        url: "https://taskade-nextjs.vercel.app/og-image.png", // Twitter card image for the website
      },
    ]
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
