"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineInstagram } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div
      style={{
        background: `url('english-light.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "115%",
        width: "100%",
        backgroundPositionX: "55%",
        backgroundPositionY: "0%",
      }}
    >
      <div className="h-[100vh] flex flex-col items-center  justify-center p-5 gap-3">
        <h1 className="font-semibold">Log in with Instagram</h1>
        <div className="flex flex-col gap-3 w-1/4">
          <Input
            type="email"
            placeholder="Username, phone or email"
            className="bg-gray-100 rounded-xl h-12"
          />
          <Input
            type="password"
            placeholder="Password"
            className="bg-gray-100 rounded-xl h-12"
          />

          <Button className="bg-black h-14 text-white  w-full rounded-xl cursor-pointer">
            <div className="flex flex-row items-center">
              <AiOutlineInstagram className="text-2xl" />
              <h1 className="font-bold text-center ml-32">Log in</h1>
            </div>
          </Button>
          <h1 className="text-center text-sm text-gray-500">
            Forgot Password?
          </h1>
        </div>
      </div>
    </div>
  );
}
