"use client";
import Navbar from "@/components/modules/landing/navbar/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BTECH_SEM4_CARDS } from "@/constants/data";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen md:px-32 px-6 w-full ">
        <div>
          <h1 className="md:text-6xl text-3xl font-bold md:pb-20  pb-12 text-center">
            All your last minute study needs <br /> in one place
          </h1>

          <Tabs defaultValue="btechSem4" className="w-full">
            <div className="flex justify-center items-center w-full">
              <TabsList className="w-full">
                <TabsTrigger value="btechSem4" className="w-full">
                  Btech Sem 4
                </TabsTrigger>
                <TabsTrigger value="other" className="w-full">
                  Other
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="btechSem4">
              <div className="flex justify-between gap-4  py-2">
                <QuickAccess1>Exam Time Table</QuickAccess1>
                <QuickAccess2>Academic Calender</QuickAccess2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>All resources</CardTitle>
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
                    <CardTitle>Old Question Papers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => {
                        router.push(
                          "https://drive.google.com/drive/folders/1btpv2zuF2k9v_7XU1zYzwD006s-vTSvS?usp=sharing"
                        );
                      }}
                    >
                      <Link2 />
                      <div className="px-3">View</div>
                    </Button>
                  </CardContent>
                </Card>

                {BTECH_SEM4_CARDS.map((card, index) => (
                  <Card className="w-full" key={index}>
                    <CardHeader>
                      <CardTitle>{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={card.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Button>
                          <Link2 />
                          <div className="px-3">View</div>
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="other">
              <div className="">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Card className="w-full" key={index}>
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
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Separator />
      <div className="flex justify-center items-center p-5 font-bold">
        Made with ❤️ by
        <div className="pl-1 text-blue-800">
          <Link href={"https://www.linkedin.com/in/faizanahmed-saiyed/"}>
            Faizan & Pavandeep
          </Link>
        </div>
      </div>
    </>
  );
}

export function QuickAccess1({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-emerald-800 bg-emerald-200  dark:te8xt-emerald-200  text-emerald-00  font-bold rounded-lg w-full text-center py-2 text-sm">
      {children}
    </div>
  );
}

export function QuickAccess2({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-violet-800 bg-violet-200 dark:text-violet-200 text-violet-800 font-bold rounded-lg w-full text-center py-2 text-sm flex justify-center items-center">
      {children}
    </div>
  );
}
