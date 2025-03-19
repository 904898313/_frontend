"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {useRouter} from "next/navigation";

export default function Page() {
  const router = useRouter()
  const handleButtonClick = () => {
    router.push("/readme")
  }
  return (
      <>
          <div className={"w-full h-80 bg-gray-700"}>
              <div className={"max-w-screen-xl mx-auto h-full flex flex-col justify-center items-center"}>
                  <div className={"text-4xl"}>
                      <p className={"ml-[-3rem] leading-none mb-2"}>👋Hello,</p>
                      <p className={""}>这是我的个人网站,欢迎光临~🥰</p>
                  </div>
                  <div className={"flex justify-center items-center mt-12 gap-4"}>
                      <Button className={"border-2 border-transparent hover:border-2 hover:border-teal-200"} asChild>
                        <Link href={"/docs"}>Build Website Docs</Link>
                      </Button>
                      <Button
                        className={"border-2 border-transparent hover:border-2 hover:border-teal-200 hover:bg-gradient-to-r hover:from-blue-500 hover:via-green-500 hover:to-purple-500"}
                        onClick={handleButtonClick}
                      >
                          Personal Readme
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
