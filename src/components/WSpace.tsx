import React from "react";
import { WorkspaceCard } from "./WorkspaceCard";

export const WSpace: React.FC = () => {
  return (
    <div className="lg:px-16 lg:py-8">
      <div className="md:mb-6">
        <h1 className="font-bold">Your Workspace</h1>
        <p>Welcome, xxx</p>
      </div>
      <div>
        <h2 className="font-bold mb-4">Overview</h2>
        <div className="flex flex-wrap justify-between gap-10">
          <div className="shadow-md border-[#FCB900] border-t-4 w-[400px]">
            <div className="bg-[#f7eed6] px-4 py-2">
              <h3 className="text-sm font-semibold">Today's Agenda</h3>
            </div>
            <div className="px-8 py-12">
              <p className="text-xs md:text-sm text-gray-400 font-semibold">
                You dont have any event schedule for today.{" "}
                <span className="text-[#FCB900]">Add</span>
              </p>
            </div>
          </div>
          <WorkspaceCard
            title="Activity Report"
            text="View full activity report"
          >
            <div className="flex justify-center gap-3 items-center">
              <div className="bg-[#e5e5e5] h-0.5 w-1/2"></div>
              <p className="text-xs font-semibold text-gray-400">Tuesday 18 Sept, 2019</p>
            </div>
            <div className="md:mb-14">
              <h4 className="text-xs font-semibold text-gray-400">You added a new client</h4>
              <div className="ml-8">
                <p className="font-semibold text-xs md:text-sm text-[#FCB900]">Odusote Mayorkun</p>
                <div className="border-l-2 inline-block px-2 border-[#FCB900] bg-[#f7eed6]">
                  <p className="text-xs md:text-sm">Status Pending</p>
                </div>
              </div>
            </div>
          </WorkspaceCard>
          <WorkspaceCard title="Tasks that are due" text="Create Tasks">
            <div className="md:mx-0.5 md:mt-0.5 md:mb-16 bg-[#f7eed6] py-1 md:px-4 rounded-md">
              <h4 className="text-xs md:text-sm font-semibold">Follow up with <span className=" text-[#FCB900]">Odusote</span></h4>
              <div className="flex gap-8">
                <p className="text-xs md:text-sm">
                  Due: <span>1/21/2021</span>
                </p>
                <p className="text-xs md:text-sm">
                  created: <span>1/15/2021</span>
                </p>
              </div>
            </div>
          </WorkspaceCard>
        </div>
      </div>
    </div>
  );
};
