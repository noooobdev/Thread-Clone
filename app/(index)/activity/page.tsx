"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ActivityCard from "@/components/ActivityCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center relative  px-[480px]">
      <Tabs defaultValue="account" className="justify-center w-[480px]">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="follows">Follows</TabsTrigger>
          <TabsTrigger value="replies">Replies</TabsTrigger>
          <TabsTrigger value="mentions">Mentions</TabsTrigger>
          <TabsTrigger value="quotes">Quotes</TabsTrigger>
          <TabsTrigger value="reposts">Reposts</TabsTrigger>
          <TabsTrigger value="verified">Verified</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <ActivityCard />
          <ActivityCard />{" "}
        </TabsContent>
        <TabsContent value="follows">
          <ActivityCard />
          <ActivityCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
