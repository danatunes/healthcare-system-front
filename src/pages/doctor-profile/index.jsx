import {Link} from "react-router-dom";
import {Fragment, useState} from "react";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon, PencilAltIcon} from "@heroicons/react/solid";
import clsx from "clsx";

export const DoctorProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col font-montserrat space-y-9">
      <div>
        <h1 className="font-bold text-2xl">Welcome Dr. Vin Diesel!</h1>
        <p className="font-normal font-montserrat text-gray-400 text-sm">
          Check the latest updateson your account
        </p>
      </div>
      <div className={clsx("grid grid-cols-1 gap-5", "sm:grid-cols-2")}>
        <ConsultingCart type="Offline" when="Today" count="10" />
        <ConsultingCart type="Online" when="Today" count="6" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4 space-y-3.5">
        <h1 className="font-medium text-xl">Last Notifications</h1>
        <div className="py-4 px-2.5 space-y-4 bg-[#F8F9FD] rounded-xl max-h-[250px] overflow-y-auto">
          <DropDown />
          <DropDown />
          <DropDown />
          <DropDown />
          <DropDown />
          <DropDown />
          <DropDown />
          <DropDown />
          <DropDown />
          <DropDown />
        </div>
      </div>
      <div className="flex flex-row absolute font-inter right-0 top-64">
        <div
          className="bg-[#C03221] mt-6 h-[45px] p-3 rounded-l"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <PencilAltIcon className="w-5 text-white" />
        </div>
        {isOpen && (
            <div className="p-6 visible:transition-all bg-white rounded-l-lg border border-[#C03221] max-w-[610px] space-y-5">
              <h1 className="font-medium text-2xl">Upcoming</h1>
            <UpcomingModalWindow time="45 Minutes" when="19 jan" count={1}/>
            <UpcomingModalWindow time="35 Minutes" when="20 jan" count={2}/>
            <UpcomingModalWindow time="60 Minutes" when="22 jan" count={3}/>
            <UpcomingModalWindow time="50 Minutes" when="20 jan" count={5}/>
            </div>
        )}
      </div>
    </div>
  );
};

const ConsultingCart = ({ type, when, count }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg p-3 justify-between">
      <div className="font-normal">
        <h1 className="text-xl">{type} Consultation</h1>
        <p className="text-sm text-gray-400">{when}</p>
      </div>
      <div className="flex flex-row justify-between items-end mt-12">
        <p className="font-normal text-5xl text-[#3A57E8]">{count}</p>
        <Link to="#" className="font-normal text-sm text-end">
          View All
        </Link>
      </div>
    </div>
  );
};

const DropDown = () => {
  return (
    <Menu as="div" className="relative w-full inline-block text-left">
      <div>
        <Menu.Button className="flex min-h-[60px] justify-between items-center w-full rounded-md shadow-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <div className="flex flex-row items-center space-x-3.5">
            <div className="w-2.5 h-2.5 rounded-3xl bg-[#3A57E8]" />
            <h1 className="font-normal text-lg">Confirmed Appoinment</h1>
          </div>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="w-full mt-2 rounded-md shadow-md	bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-4 px-10 overflow-x-auto">
            <Menu.Item>
              <table className="w-full overflow-hidden table-auto font-montserrat">
                <thead>
                  <tr className="text-sm text-gray-400">
                    <th className="font-normal">Patient</th>
                    <th className="font-normal">Symptoms</th>
                    <th className="font-normal">Time</th>
                    <th className="font-normal">Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-sm">
                    <td className="font-normal">Vin Diesel</td>
                    <td className="font-normal">Daun sindrom</td>
                    <td className="font-normal">July 20, 9:00-10:00 am</td>
                    <td className="font-normal">+7-708-310-04-02</td>
                  </tr>
                </tbody>
              </table>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const UpcomingModalWindow = ({count,when,time}) => {
  return(
     <>
        <div className={clsx("flex flex-col items-center space-x-0 space-y-2","sm:flex-row sm:space-x-8 sm:space-y-0")}>
          <div className="w-full">
            <h1 className="font-medium text-xl">{count} client</h1>
            <p className="font-normal text-[#8A92A6] text-base">Methods of treatment are given</p>
          </div>
          <div className="w-full">
            <p className="text-[#C03221] text-base font-normal">{when}</p>
            <p className="font-normal text-[#8A92A6] text-base">{time} Minutes</p>
          </div>
          <div className={clsx("flex items-center justify-center border w-full max-h-[40px] border-[#C03221] rounded py-2 px-4","hover:bg-red-100 hover:transition-all","sm:max-w-[50px]")}>
            <PencilAltIcon className="w-5 text-[#C03221]"/>
          </div>
        </div>
       </>
  )
}