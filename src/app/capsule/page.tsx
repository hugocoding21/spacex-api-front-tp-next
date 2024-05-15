"use client";
import React from "react";
import { useState } from "react";
import { Capsule, Mission } from "@/types/capsule";

export default function CapsulePage() {
  const [capsuleData, setCapsuleData] = useState<null | Capsule>(null);

  async function getCapsule(): Promise<void> {
    const data = await fetch("https://api.spacexdata.com/v3/capsules");
    const getCapsule = await data.json();
    setCapsuleData(getCapsule);
  }

  getCapsule();

  return (
    <div className='flex flex-wrap justify-center'>
      {capsuleData ? (
        capsuleData.slice(0, 6).map((capsule: Capsule) => (
          <table
            key={capsule.capsule_id}
            className='m-10 border border-gray-400'>
            <tbody>
              <tr>
                <th colSpan={2} className='border border-gray-400 p-2'>
                  {capsule.capsule_serial}
                </th>
              </tr>
              <tr>
                <td className='border border-gray-400 p-2'>Status</td>
                <td className='border border-gray-400 p-2'>{capsule.status}</td>
              </tr>
              <tr>
                <td className='border border-gray-400 p-2'>Type</td>
                <td className='border border-gray-400 p-2'>{capsule.type}</td>
              </tr>
              <tr>
                <td className='border border-gray-400 p-2'>Launch</td>
                <td className='border border-gray-400 p-2'>
                  {capsule.original_launch}
                </td>
              </tr>
              <tr>
                <td className='border border-gray-400 p-2'>Details</td>
                <td className='border border-gray-400 p-2'>
                  {capsule.details !== null ? capsule.details : "no data"}
                </td>
              </tr>
              <tr>
                <td className='border border-gray-400 p-2'>Reuse</td>
                <td className='border border-gray-400 p-2'>
                  {capsule.reuse_count !== 0 ? capsule.reuse_count : "no data"}
                </td>
              </tr>
              <tr>
                <td className='border border-gray-400 p-2'>Mission</td>
                <td className='border border-gray-400 p-2'>
                  {capsule.missions.map((mission: Mission) => (
                    <span key={mission.flight}>{mission.name}, </span>
                  ))}
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
