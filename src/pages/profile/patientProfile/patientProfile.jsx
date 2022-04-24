import {
  HeadingProfile,
  LastNotificationList,
  List,
} from "../../../components";
import { DownloadIcon, UserIcon } from "@heroicons/react/outline";
import clsx from "clsx";

export const PatientProfile = () => {
  return (
    <div className="space-y-9">
      <HeadingProfile name="Vin Diesel!" />
      <>
        <UserInformations />
        <List header={<h4 className="text-xl font-medium">Documents</h4>}>
          <table className="[border-spacing:0 0.75rem] border-collapse w-full table-auto bg-[#F8F9FD] rounded-t-xl">
            <thead>
              <tr className="text-left text-gray-400 text-sm">
                <th className="py-4 font-normal px-10">Data</th>
                <th className="py-4 font-normal px-10">Symptoms</th>
                <th className="py-4 font-normal px-10">Specialist</th>
                <th className="py-4 font-normal px-10 text-center">Download</th>
              </tr>
            </thead>
            <tbody>
              {new Array(10).fill("").map((_, index) => (
                <tr
                  className={clsx(
                    "text-sm text-left",
                    index % 2 === 0 && "bg-white"
                  )}
                >
                  <td className="py-4 font-normal px-10">20.03.2022</td>
                  <td className="py-4 font-normal px-10">Daun syndrom</td>
                  <td className="py-4 font-normal px-10">Dr. Vin Diesel</td>
                  <td className="py-4 flex justify-center font-normal text-center px-10">
                    <DownloadIcon className="w-5 text-[#3A57E8]" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </List>
        <LastNotificationList className="py-4 px-2.5" isDoctor={false} />
      </>
    </div>
  );
};

const UserInformations = () => {
  const userInformation = {
    id: 1,
    name: "Vin Diesel",
    iin: "020402551145",
    city: "Nur - Sultan",
    gender: "Male",
    dateOfBirthDay: "02.04.02",
    phone: "+7-708-310-04-02",
    insurance: "Med Right",
  };

  return (
    <div className="bg-white rounded-xl">
      <div
        className={clsx(
          "font-montserrat flex flex-col items-end",
          "sm:flex-row"
        )}
      >
        <UserIcon
          className={clsx(
            "rounded-l-xl h-full w-56 bg-[#C4C4C4] text-white hidden",
            "xl:block"
          )}
        />
        <div className="py-3 px-8 space-y-3 w-full">
          <h4 className="text-xl leading-8">{userInformation.name}</h4>
          <div className={clsx("flex flex-wrap space-y-2")}>
            <UserInformation label="IIN" information={userInformation.iin} />
            <UserInformation label="City" information={userInformation.city} />
            <UserInformation
              label="Gender"
              information={userInformation.gender}
            />
            <UserInformation
              label="Date of Birth"
              information={userInformation.dateOfBirthDay}
            />
            <UserInformation
              label="Phone"
              information={userInformation.phone}
            />
            <UserInformation
              label="Insurance"
              information={userInformation.insurance}
            />
          </div>
        </div>
        <a href="#" className="text-[#3A57E8] text-sm mb-2 mr-2">
          Edit
        </a>
      </div>
    </div>
  );
};

const UserInformation = ({ label, information }) => {
  return (
    <div
      className={clsx(
        "w-full flex flex-row justify-between flex-grow",
        "sm:w-1/3 sm:flex-col"
      )}
    >
      <p className={clsx("text-sm text-gray-400 mr-2", "sm:mr-0")}>{label}</p>
      <p className="text-md font-bold">{information}</p>
    </div>
  );
};
