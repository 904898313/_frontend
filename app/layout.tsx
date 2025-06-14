import '@/lib/global.css'
import { zcoolXiaoWei } from '@/lib/font/fonts';
import ChangeTheme from "../components/theme/changeTheme";
import Link from "next/link";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" suppressHydrationWarning>
          <body className={`${zcoolXiaoWei.className} flex flex-col min-h-screen background relative transition-all duration-500 text-textColor`}>
            <Provider>
              <div className={"w-full h-10 sticky top-0 backdrop-blur"}>
                <div className={"w-full h-full max-w-screen-xl mx-auto flex items-center justify-between px-5"}>
                  <div className={"cursor-pointer"}>
                    <Link href={"/"}>HOME</Link>
                  </div>
                  <div className={"justify-self-center"}>Personal Website</div>
                  <ChangeTheme />
                </div>
              </div>
              {children}
            </Provider>
          </body>
      </html>
  );
}
