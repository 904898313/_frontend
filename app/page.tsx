import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
      <>
          <div className={"w-full h-80 bg-gray-700"}>
              <div className={"max-w-screen-xl mx-auto h-full flex flex-col justify-center items-center"}>
                  <div className={"text-4xl"}>
                      <p className={"ml-[-3rem] leading-none mb-2"}>👋Hello,</p>
                      <p>这是我的个人网站,欢迎光临~🥰</p>
                  </div>
                  <div className={"flex justify-center items-center mt-12 gap-4"}>
                      <Button className={"border-2 border-transparent hover:border-2 hover:border-teal-200"} asChild>
                        <Link href={"/docs"}>Build Website Docs</Link>
                      </Button>
                      <Button
                        className={"border-2 border-transparent hover:border-2 hover:border-teal-200 hover:bg-gradient-to-r hover:from-blue-500 hover:via-green-600 hover:to-purple-500"}
                        asChild
                      >
                        <Link href={"/readme"}>Personal Readme</Link>
                      </Button>
                  </div>
              </div>
          </div>
          <div className={"w-full h-80 bg-gray-900"}>
          <div className={"max-w-screen-xl mx-auto h-full"}>
                  123
              </div>
          </div>
          <div className={"w-full h-80 bg-gray-700"}>
              <div className={"max-w-screen-xl mx-auto h-full"}>
                  123
              </div>
          </div>
      </>
  );
}
