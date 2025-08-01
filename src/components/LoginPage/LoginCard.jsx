("use client");
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
import { Checkbox } from "@/components/ui/checkbox";

const LoginCard = () => {
  return (
    <Card className="h-[400px] bg-white/30 backdrop-blur-2xl">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 h-[250px]">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="username">Username or Email</Label>
          <Input id="username" placeholder="Enter your username or email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Checkbox id="terms" className="" />
            <Label htmlFor="terms">Remember me</Label>
          </div>
          <a href="" className="text-sm text-blue-900 hover:underline">
            Forgot password?
          </a>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-blue-950 hover:bg-blue-900">Log In</Button>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
