import { ClinicCard, List } from "../../components";
import { useEffect, useMemo, useState } from "react";
import photo_clinic from "../../images/example_photo_clinic.png";
import { NavLink, useParams } from "react-router-dom";
import clsx from "clsx";
import { StarIcon, UserIcon } from "@heroicons/react/outline";

export const ChosenClinic = () => {
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

  const doctors = useMemo(
    () => [
      {
        id: "1",
        name: "Dr. Паленше",
        specialist: "Urologist",
        experience: "5 años",
        rating: 4.8,
      },
      {
        id: "2",
        name: "Dr. Тугенше",
        specialist: "Urologist",
        experience: "5 años",
        rating: 4.8,
      },
      {
        id: "3",
        name: "Dr. Аслан",
        specialist: "Oftalmología",
        experience: "5 años",
        rating: 4.8,
      },
      {
        id: "4",
        name: "Dr. Жандос",
        specialist: "Oftalmología",
        experience: "5 años",
        rating: 4.8,
      },
    ],
    []
  );

  const { id } = useParams();

  const [clinic, setClinic] = useState("");
  useEffect(() => {
    setClinic(data.find((clinic) => clinic.id === id));
  }, [id]);

  return (
    <div className="space-y-7">
      <ClinicCard {...clinic} />
      <List className="p-2.5 max-h-[400px]">
        {doctors.map((doctor) => (
          <NavLink to={`/doctors/${doctor.id}`}>
            <DoctorCard key={doctor.id} {...doctor} />
          </NavLink>
        ))}
      </List>
    </div>
  );
};

const DoctorCard = ({ name, specialist, experience, rating }) => {
  return (
    <div className="bg-white mb-3 rounded-xl shadow-md">
      <div
        className={clsx(
          "font-montserrat flex flex-col items-end",
          "sm:flex-row"
        )}
      >
        <UserIcon
          className={clsx(
            "rounded-l-xl h-full w-44 bg-[#C4C4C4] text-white hidden",
            "xl:block"
          )}
        />
        <div className="py-3 px-8 flex flex-col justify-between w-full">
          <h4 className="text-xl leading-8">{name}</h4>
          <p className="text-sm font-normal text-gray-500">{specialist}</p>
          <p className="text-sm font-normal text-gray-500">{experience}</p>
          <div className="flex justify-end items-center flex-row space-x-1.5">
            <StarIcon className="text-[#3A57E8] w-5" />
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
