import './globals.css';

export const metadata = {
  title: 'Aditya Joshi - DevOps Engineer | Cloud Architect | SRE',
  description: 'DevOps Engineer specializing in Kubernetes, CI/CD, AWS, Azure, and Cloud Infrastructure',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}