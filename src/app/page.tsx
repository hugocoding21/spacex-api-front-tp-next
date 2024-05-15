"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NextLaunch } from "@/types/launch";
import moment from "moment";
export default function Home() {
  const [launchData, setLaunchData] = useState<NextLaunch | null>(null);

  async function getNextLaunch(): Promise<void> {
    const data = await fetch("https://api.spacexdata.com/v3/launches/next");
    const getLaunch = await data.json();
    setLaunchData(getLaunch);
  }
  getNextLaunch();
  const lunch = launchData?.launch_date_utc;

  return (
    <>
      <main className='flex flex-col items-center gap-10'>
        <h1 className='font-bold text-3xl'>Welcome to Space-up</h1>

        <h2>Next launch</h2>
        {launchData && (
          <div className='flex  shadow-inner border   rounded-lg border-double w-4/5 p-10 hover:scale-105 transition-transform ease-linear'>
            <Image
              src={launchData?.links.mission_patch_small}
              width={120}
              height={0}
              alt='logo spacex'
              className='mr-10'
            />
            <div className='flex flex-col font-semibold'>
              <h3>
                Flight number:
                <span className='font-normal'> {launchData.flight_number}</span>
              </h3>
              <p>
                Lunch site: <span className='font-normal'></span>
              </p>
              <p>
                Lunch at:{" "}
                <span className='font-normal'>
                  {moment(lunch).format("LLLL")}
                </span>
              </p>
              <p>
                Details:
                <br />
                <span className='font-normal'>{launchData.details}</span>
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
