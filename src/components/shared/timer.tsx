import dynamic from "next/dynamic";
import React from "react";

function Timer({
  timeLeft,
}: {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}) {
  return (
    <>
      <div className="font-bold flex justify-center items-center flex-col py-4">
        <div className="font-medium text-muted-foreground">
          Time left till exams
        </div>
        <div className="text-2xl">
          {timeLeft.days} Days {timeLeft.hours} Hours
        </div>
        <div>
          {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Timer), {
  ssr: false,
});
