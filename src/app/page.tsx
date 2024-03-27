"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen md:px-32 px-6 w-full ">
      <div>
        <h1 className="md:text-6xl text-3xl font-bold md:pb-20  pb-12 text-center">
          All your last minute study needs in one place
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Question Bank Solution</CardTitle>
              <CardDescription>
                All Subject Question Banks and Solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => {
                  router.push("https://telegram.dog/+9lBt7vQiWws1MWY1");
                }}
              >
                <Link2 />
                <div className="px-3">View</div>
              </Button>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Comming soon...</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="">
                <Button
                  disabled
                  onClick={() => {
                    router.push("https://telegram.dog/+9lBt7vQiWws1MWY1");
                  }}
                >
                  <Link2 />
                  <div className="px-3">View</div>
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Comming soon...</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Button disabled>
                <Link2 />
                <div className="px-3">View</div>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
