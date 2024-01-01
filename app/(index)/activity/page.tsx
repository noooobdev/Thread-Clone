"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ActivityCard from "@/components/ActivityCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center relative  ">
      <Tabs
        defaultValue="all"
        className="flex  flex-col items-center justify-center w-full"
      >
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="follows">Follows</TabsTrigger>
          <TabsTrigger value="replies">Replies</TabsTrigger>
          <TabsTrigger value="mentions">Mentions</TabsTrigger>
          <TabsTrigger value="quotes">Quotes</TabsTrigger>
          <TabsTrigger value="reposts">Reposts</TabsTrigger>
          <TabsTrigger value="verified">Verified</TabsTrigger>
        </TabsList>
        <TabsContent
          value="all"
          className="w-full flex flex-col justify-center items-center"
        >
          <ActivityCard />
          <ActivityCard />
        </TabsContent>
        <TabsContent
          value="follows"
          className="w-full flex flex-col justify-center items-center"
        >
          <ActivityCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
