import './globals.css';
import { ReCaptchaProvider } from "next-recaptcha-v3";

export const metadata = {
  title: "Aditya Joshi – DevOps Engineer",
  description: "Neon DevOps Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        >
          {children}
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
