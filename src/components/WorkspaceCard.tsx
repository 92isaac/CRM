import React, { ReactNode } from "react";
import { GrLinkNext } from "react-icons/gr";

interface CardProps {
  title: string;
  text: string;
  children: ReactNode;
}

export const WorkspaceCard: React.FC<CardProps> = ({
  title,
  text,
  children,
}) => {
  return (
    <div className="flex flex-wrap w-[] shadow-md mb-4">
      <div className="shadow border-[#FCB900] border-t-4">
        <div className="bg-[#f7eed6] flex justify-between px-4 py-2 gap-10 items-center">
          <h3 className=" text-sm font-semibold">{title}</h3>
          <p className="text-xs md:text-sm text-[#FCB900] ">
            {text} <GrLinkNext className='inline ml-5 text-[#f3e1af]' />{" "}
          </p>
        </div>
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};
