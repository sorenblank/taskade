import "./globals.css";

export const metadata = {
  title: "Taskade",
  description: "Taskade is a simple project and task manager. Perfect for remote teams. Unleash your team productivity with projects task list and collaboration tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
