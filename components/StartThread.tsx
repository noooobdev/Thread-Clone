import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

import { Separator } from "@/components/ui/separator";

import AddPostDialog from "./AddPostDialog";

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
                className="outline-0 text-sm dark:bg-[#171717]"
              />
            </DialogTrigger>
          </div>
          <Button
            variant="outline"
            disabled
            className="rounded-2xl px-5 py-1 dark:bg:white"
          >
            Post
          </Button>
        </div>
        <Separator />
        <DialogContent className="sm:max-w-[600px] rounded-xl dark:border-[#3d3d3d]">
          <AddPostDialog />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StartThread;
