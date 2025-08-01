"use client";
import { useState } from "react";
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
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const SignupCard = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  return (
    <Card className="h-[400px] ">
      <CardHeader>
        <CardTitle>Create an Account</CardTitle>
        <CardDescription>
          Fill in your details to register a new account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 overflow-auto h-[250px] ">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter a username" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="Enter your First Name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Enter your Last Name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="emailAddress">Email Address</Label>
          <Input
            id="emailAddress"
            type="email"
            placeholder="Enter your Email Address"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="date" className="px-1">
            Date of birth
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
              <Button
                variant="outline"
                id="date"
                className="w-full justify-between font- text-gray-500"
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="password">New password</Label>
          <Input id="password" type="password" placeholder="Enter a password" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="tabs-demo-new">Confirm password</Label>
          <Input
            id="tabs-demo-new"
            type="password"
            placeholder="Re-enter your password"
          />
        </div>
      </CardContent>
      <CardFooter className="">
        <Button className="w-full bg-blue-950 hover:bg-blue-900">
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SignupCard;
