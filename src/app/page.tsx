"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BTECH_SEM4_CARDS } from "@/constants/data";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { QuickAccess2 } from "@/components/shared/quick-access-2";
import { QuickAccess1 } from "@/components/shared/quick-access-1";
import Timer from "@/components/shared/timer";

export default function Home() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const targetDate = dayjs("2024-04-04T12:30:00");
    const now = dayjs();

    const difference = targetDate.diff(now);

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = targetDate.diff(now, "day");
    const hours = targetDate.diff(now, "hour") % 24;
    const minutes = targetDate.diff(now, "minute") % 60;
    const seconds = targetDate.diff(now, "second") % 60;

    return { days, hours, minutes, seconds };
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen md:px-32 px-6 w-full mb-14">
        <div>
          <Timer timeLeft={timeLeft} />
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
                <Link
                  href="https://drive.google.com/file/d/1eCdVhzZ-6DQOnsa7AZb0JpVZPAm19Cmw/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-full"
                >
                  <QuickAccess1>Exam Time Table</QuickAccess1>
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1eP-VDf3sXzR0gEReyhRffeGNfw3S1bg5/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-full"
                >
                  <QuickAccess2>Academic Calender</QuickAccess2>
                </Link>
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
    </>
  );
}
