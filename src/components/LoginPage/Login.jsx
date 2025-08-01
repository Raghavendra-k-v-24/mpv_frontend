"use client";
import React, { useState } from "react";
import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Tabs defaultValue="login" className="h-max w-[350px]">
        <TabsList className="bg-blue-900 w-[200px]">
          <TabsTrigger
            value="login"
            className="data-[state=active]:text-black data-[state=inactive]:text-white font-semibold"
          >
            Log In
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="data-[state=active]:text-black data-[state=inactive]:text-white"
          >
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginCard />
        </TabsContent>
        <TabsContent value="signup">
          <SignupCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
