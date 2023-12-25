"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import Logo from "@/app/_assets/Logo.svg";
import Feed from "@/app/_assets/icons/feed.svg";
import Explore from "@/app/_assets/icons/explore.svg";
import Write from "@/app/_assets/icons/write.svg";
import Heart from "@/app/_assets/icons/heart.svg";
import User from "@/app/_assets/icons/user.svg";
import Menu from "@/app/_assets/icons/menu.svg";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import AddPostDialog from "./AddPostDialog";
const Navbar = () => {
  const router = useRouter();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-row px-12 py-2  items-center justify-evenly w-full">
      <Logo className="cursor-pointer" />
      <div className="flex gap-3 justify-center">
        <Button
          variant="ghost"
          className=" p-8 "
          onClick={() => router.push("/")}
        >
          <Feed />
        </Button>
        <Button
          variant="ghost"
          className=" p-8 "
          onClick={() => router.push("/search")}
        >
          <Explore />
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className=" p-8 ">
              <Write />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] rounded-xl">
            <AddPostDialog />
          </DialogContent>
        </Dialog>

        <Button
          variant="ghost"
          className=" p-8 "
          onClick={() => router.push("/activity")}
        >
          <Heart />
        </Button>
        <Button
          variant="ghost"
          className=" p-8 "
          onClick={() => router.push("/profile")}
        >
          <User />
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu className=" cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-2xl">
          <DropdownMenuItem className="cursor-pointer" onClick={handleTheme}>
            Switch Appeareance
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">About</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            Report a problem
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
