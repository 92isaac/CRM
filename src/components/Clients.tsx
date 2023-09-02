import React from "react";
import { clientData } from "../helpers/data";

export const Clients: React.FC = () => {
  return (
    <div className="lg:px-16 lg:py-8">
      <div>
        <h1 className="font-bold">Clients</h1>
        <p>Here is the list</p>
      </div>
      <div className="rounded-md shadow md:px-8 py-4">
        <form
          action=""
          className="w-full md:flex justify-between items-center gap-10"
        >
          <input
            type="text"
            title="search"
            className="border rounded-md px-4 py-2 w-full"
            placeholder=" &#128269; Search by name, email"
          />
          <button className=" bg-[#FCB900] text-white text-xs font-medium px-4 py-3 mt-3 md:mt-0 rounded-md md:w-1/3">
            Add new Client
          </button>
        </form>
        <div className="w-full overflow-x-auto border border-b-md md:mb-20 mt-3 md:mt-10 rounded-t-md">
        <table className="w-full whitespace-no-wrap border-collapse border border-b-md">
            <thead className="bg-[#f6edd3] md:leading-10 border-b-[#FCB900] border-b-4 ">
                <tr className="text-left font-bold">
                    <th className="md:px-3 py-1">Name</th>
                    <th className="md:px-3 py-1">Email</th>
                    <th className="md:px-3 py-1">Phone</th>
                    <th className="px-6 md:px-3 py-1">Residential Address</th>
                </tr>
            </thead>
            <tbody>
             {clientData.map((client)=>(
                   <tr className="hover:border-l-[#FCB900] hover:bg-[#f6edd3] hover:border-l-2" key={client.id}>
                   <td className="px-3 text-sm py-3">{client.name}</td>
                   <td className="px-3 text-sm py-3">{client.email}</td>
                   <td className="px-3 text-sm py-3">{client.phone}</td>
                   <td className="px-6 md:px-3 text-sm py-3">{client.address}</td>
               </tr>
             ))}
            </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};
