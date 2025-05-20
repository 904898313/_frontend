import '@/lib/global.css'
import { lusitana } from '@/lib/fonts';
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./_components/header"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" suppressHydrationWarning>
          <body className={`${lusitana.className} relative transition-all duration-500 text-textColor`}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
            >
              <Header />
              {children}
            </ThemeProvider>
          </body>
      </html>
  );
}
