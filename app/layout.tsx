import '@/lib/global.css'
import { lusitana } from '@/lib/fonts';
import { ThemeProvider } from "@/components/theme-provider";
import ChangeTheme from "./_components/changeTheme";
import Link from "next/link";

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
            enableSystem={false}
          >
            {/*header*/}
            <div className={"w-full h-10 sticky top-0 backdrop-blur"}>
              <div className={"w-full h-full max-w-screen-xl mx-auto flex items-center justify-between px-5"}>
                <div className={"cursor-pointer"}>
                  <Link href={"/"}>HOME</Link>
                </div>
                <div className={"justify-self-center"}>Personal Website</div>
                <ChangeTheme />
              </div>
            </div>
            {/*content*/}
            {children}
          </ThemeProvider>
          </body>
      </html>
  );
}
