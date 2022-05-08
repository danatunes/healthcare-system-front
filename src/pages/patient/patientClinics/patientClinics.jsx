import { ClinicCard, List } from "../../../components";
import { FilterIcon } from "@heroicons/react/outline";
import photo_clinic from "../../../images/example_photo_clinic.png";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";

export const PatientClinics = () => {
  const data = useMemo(
    () => [
      {
        id: "1",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 4,
        address: "Calle de la salud, 1, Madrid",
      },
      {
        id: "2",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 2,
        address: "Calle de la salud, 1, Madrid",
      },
      {
        id: "3",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 1,
        address: "Calle de la salud, 1, Madrid",
      },
      {
        id: "4",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 3.5,
        address: "Calle de la salud, 1, Madrid",
      },
      {
        id: "5",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 4.8,
        address: "Calle de la salud, 1, Madrid",
      },
      {
        id: "6",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 4.2,
        address: "Calle de la salud, 1, Madrid",
      },
      {
        id: "7",
        name: "Clinica de la salud",
        img: photo_clinic,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",
        rating: 5,
        address: "Calle de la salud, 1, Madrid",
      },
    ],
    []
  );

  const handleOpen = (clinic) => {};

  return (
    <div>
      <div className="flex flex-row justify-end pr-7 pb-7">
        <FilterIcon className="w-5 text-[#3A57E8]" />
      </div>
      <List className="px-4 py-3 max-h-[500px]">
        {data.map((clinic) => (
          <NavLink to={`${clinic.id}`}>
            <ClinicCard key={clinic.id} {...clinic} />
          </NavLink>
        ))}
      </List>
    </div>
  );
};
