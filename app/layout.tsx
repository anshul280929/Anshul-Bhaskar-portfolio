import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { OnboardingProvider } from "@/components/onboarding/OnboardingProvider";

export const metadata: Metadata = {
  title: "Anshul Bhaskar | Portfolio",
  description: "AI & Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={GeistSans.className}
        suppressHydrationWarning
      >
        {/* Disable browser automatic scroll restoration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
            `,
          }}
        />

        {/* Global Onboarding State */}
        <OnboardingProvider>
          <main className="mx-auto max-w-content px-6 md:px-10">
            {children}
          </main>
        </OnboardingProvider>
      </body>
    </html>
  );
}