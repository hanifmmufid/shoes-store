import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  weight: ["300", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Shoes Store`,
    default: `${APP_NAME}`,
  },
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(SERVER_URL)
};
 
/**
 * The root layout component. It sets up the document structure and applies
 * the font and theme providers. It also sets up the html and body tags and
 * applies the Roboto font.
 *
 * @remarks
 * This component is special-cased by Next.js and is not included in the
 * component tree. It is used to set up the document structure and to wrap
 * the entire app with providers.
 *
 * @example
 * <RootLayout>
 *   <App />
 * </RootLayout>
 */
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
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
  );
}
