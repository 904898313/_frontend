import '@/common/global.css'
import { lusitana } from '@/common/fonts';
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
          <body className={`${lusitana.className} relative antialiased text-teal-200`}>
              <div className={"w-full h-10 bg-gray-700 sticky top-0"}>
                  <div className={"w-full h-full max-w-screen-xl mx-auto grid grid-cols-3 items-center px-5"}>
                      <div className={"cursor-pointer"}>
                          <Link href={"/"}>HOME</Link>
                      </div>
                      <div className={"justify-self-center cursor-pointer"}>Personal Website</div>
                      <div className={"justify-self-end cursor-pointer"}>login</div>
                  </div>
              </div>
              {children}
          </body>
      </html>
  );
}
