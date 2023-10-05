import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { IoImagesOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const StartThread = () => {
  return (
    <div className="w-full">
      <Dialog>
        <div className="flex gap-24 justify-between p-3">
          <div className="flex gap-3 ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <DialogTrigger asChild>
              <input
                type="text"
                placeholder="Start a thread..."
                className="bg-white outline-0 text-sm"
              />
            </DialogTrigger>
          </div>
          <Button variant="outline" disabled className="rounded-2xl px-5 py-1">
            Post
          </Button>
        </div>
        <Separator />
        <DialogContent className="sm:max-w-[600px] rounded-xl">
          <div>
            <div className="flex gap-3 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-semibold">Niraj</h1>
                <input
                  type="text"
                  placeholder="Start a thread..."
                  className="bg-white outline-0 text-sm font-light"
                />
              </div>
            </div>
            <IoImagesOutline className="ml-12 mt-3 text-xl text-gray-400 hover:cursor-pointer" />
            <div className="flex justify-between items-center py-5">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <h1 className="text-gray-400 font-light text-sm">
                    Anyone can reply
                  </h1>{" "}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-2xl p-2">
                  <DropdownMenuItem className="font-semibold cursor-pointer p-2">
                    Anyone{" "}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="font-semibold  cursor-pointer p-2">
                    Profiles you follow
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="font-semibold cursor-pointer p-2">
                    Mentioned Only
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" className="rounded-2xl px-5 py-1">
                Post
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StartThread;
