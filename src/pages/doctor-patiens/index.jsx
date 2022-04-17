import {PlusCircleIcon} from "@heroicons/react/solid";
import clsx from "clsx";

export const DoctorPatients = () => {
  return (
    <div className="px-5 py-4 w-full rounded-lg bg-white font-montserrat">
        <div className="w-full max-h-[500px] flex flex-row justify-between">
            <h1 className="font-medium text-xl">18 Patient Total</h1>
            <div className="flex flex-row justify-between items-center space-x-5">
                <PlusCircleIcon className="w-7 text-[#3A57E8]"/>
                <p className="font-bold text-lg text-[#3A57E8]">Add new Patient</p>
            </div>
        </div>
        <div className="max-h-[500px] overflow-scroll px-4 mt-3">
        <table className="w-full table-auto bg-[#F8F9FD] rounded-t-xl">
            <thead>
            <tr className="text-left text-gray-400 text-sm">
                <th className="py-4 font-normal px-10">Name</th>
                <th className="py-4 font-normal px-10">Email</th>
                <th className="py-4 font-normal px-10">Conditions</th>
                <th className="py-4 font-normal px-10">Number</th>
            </tr>
            </thead>
            <tbody>
            {
                new Array(100).fill("").map((_,index)=>(
                    <tr className={clsx("text-sm text-left",index%2===0 && "bg-white")}>
                        <td className="py-4 font-normal px-10">Vin Diesel</td>
                        <td className="py-4 font-normal px-10">VinDiesel@gmail.com</td>
                        <td className="py-4 font-normal px-10">Adam Bolmaid</td>
                        <td className="py-4 font-normal px-10">+7-708-310-04-02</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </div>
    </div>
  );
};