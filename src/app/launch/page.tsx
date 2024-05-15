"use client";
import { useState } from "react";
import { NextLaunch } from "@/types/launch";

export default function LaunchPage() {
  const [launchData, setLaunchData] = useState<null | NextLaunch[]>(null);

  async function getLaunch(): Promise<void> {
    if (launchData === null) {
      const data = await fetch("https://api.spacexdata.com/v3/launches");
      const getLaunch = await data.json();
      setLaunchData(getLaunch);
    }
  }

  getLaunch();

  return (
    <div className='flex flex-wrap justify-center'>
      {launchData ? (
        launchData.slice(0, 20).map((launch: NextLaunch) => (
          <table
            key={launch.flight_number}
            className='m-10 border border-gray-400'>
            <tbody>
              <tr>
                <th colSpan={2} className='border border-gray-400 p-2'>
                  {launch.mission_name}
                </th>
              </tr>
              <tr>
                <td className='border border-gray-400 p-2'>Flight Number</td>
                <td className='border border-gray-400 p-2'>
                  {launch.flight_number}
                </td>
              </tr>
              <tr>
                <td className='border border-gray-400 p-2'>Launch Date</td>
                <td className='border border-gray-400 p-2'>
                  {new Date(launch.launch_date_utc).toLocaleString()}
                </td>
              </tr>
              <tr>
                <td className='border border-gray-400 p-2'>Launch Site</td>
                <td className='border border-gray-400 p-2'>
                  {launch.launch_site.site_name_long}
                </td>
              </tr>
              <tr>
                <td className='border border-gray-400 p-2'>Rocket</td>
                <td className='border border-gray-400 p-2'>
                  {launch.rocket.rocket_name}
                </td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}
