'use client'

import useCountdown from "@/hooks/useCountdown";
import { cn } from "@/lib/utils";

type TShowCounter = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type TDateTimeDisplay = {
  value: number;
  type: string;
  isDanger: boolean;
};

const ExpiredNotice = () => {
  return (
    <div className="text-center, p-8 border border-[#ebebeb] rounded m-1">
      <span className="text-4xl font-bold text-red-500">Expired!!!</span>
      <p className="text-2xl">Please select a future date and time.</p>
    </div>
  );
};

const DateTimeDisplay = ({ value, type, isDanger }: TDateTimeDisplay) => {
  return (
    <div
      className={cn(
        "px-3 flex flex-col items-center",
        isDanger && "text-[#ff0000]"
      )}
    >
      <p>{value}</p>
      <span className="uppercase text-xs">{type}</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }: TShowCounter) => {
  return (
    <div className="p-2 flex">
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({
  targetDate,
  targetTime,
}: {
  targetDate: string;
  targetTime: string;
}) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate, targetTime);

  // If target date and time has passed, show expired notice
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
