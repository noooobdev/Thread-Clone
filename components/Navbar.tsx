"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/app/_assets/Logo.svg";
import Feed from "@/app/_assets/NavBarIcons/feed.svg";
import SelectedFeed from "@/app/_assets/SelectedIcons/feed_selected.svg";
import DarkSelectedFeed from "@/app/_assets/DarkSelectedIcon/feed_selected.svg";
import Explore from "@/app/_assets/NavBarIcons/explore.svg";
import SelectedExplore from "@/app/_assets/SelectedIcons/explore_selected.svg";
import DarkSelectedExplore from "@/app/_assets/DarkSelectedIcon/explore_selected.svg";
import Write from "@/app/_assets/NavBarIcons/write.svg";
import Heart from "@/app/_assets/NavBarIcons/heart.svg";
import SelectedHeart from "@/app/_assets/SelectedIcons/heart_selected.svg";
import DarkSelectedHeart from "@/app/_assets/DarkSelectedIcon/heart_selected.svg";
import User from "@/app/_assets/NavBarIcons/user.svg";
import SelectedUser from "@/app/_assets//SelectedIcons/user_selected.svg";
import DarkSelectedUser from "@/app/_assets/DarkSelectedIcon/user_selected.svg";
import Menu from "@/app/_assets/NavBarIcons/menu.svg";
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

  const [activeTab, setActiveTab] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    // Set the active tab based on the current route
    if (pathname === "/") {
      setActiveTab("feed");
    } else if (pathname === "/search") {
      setActiveTab("explore");
    } else if (pathname === "/activity") {
      setActiveTab("activity");
    } else if (pathname === "/profile") {
      setActiveTab("profile");
    }
  }, [pathname]);

  return (
    <div className="flex flex-row px-12 py-2  items-center justify-evenly w-full">
      <Logo className="cursor-pointer" />
      <div className="flex gap-3 justify-center">
        <Button
          variant="ghost"
          className=" p-8 "
          onClick={() => router.push("/")}
        >
          {activeTab === "feed" ? (
            theme === "dark" ? (
              <DarkSelectedFeed />
            ) : (
              <SelectedFeed />
            )
          ) : (
            <Feed />
          )}
        </Button>
        <Button
          variant="ghost"
          className=" p-8 "
          onClick={() => router.push("/search")}
        >
          {activeTab === "explore" ? (
            theme === "dark" ? (
              <DarkSelectedExplore />
            ) : (
              <SelectedExplore />
            )
          ) : (
            <Explore />
          )}
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
          {activeTab === "activity" ? (
            theme === "dark" ? (
              <DarkSelectedHeart />
            ) : (
              <SelectedHeart />
            )
          ) : (
            <Heart />
          )}
        </Button>
        <Button
          variant="ghost"
          className=" p-8 "
          onClick={() => router.push("/profile")}
        >
          {activeTab === "profile" ? (
            theme === "dark" ? (
              <DarkSelectedUser />
            ) : (
              <SelectedUser />
            )
          ) : (
            <User />
          )}
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
