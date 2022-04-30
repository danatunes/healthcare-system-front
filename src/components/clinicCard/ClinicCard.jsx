import {
  CalendarIcon,
  LocationMarkerIcon,
  StarIcon,
} from "@heroicons/react/outline";

export const ClinicCard = ({ name, desc, img, rating, address }) => {
  console.log(name, desc, img, rating, address);
  return (
    <div className="flex shadow my-3 bg-white flex-row rounded-lg font-montserrat">
      <img src={img} className="w-[215px]" alt="clinic_photo" />
      <div className="divide-x-2 p-4 flex flex-row">
        <div className="flex px-4 flex-col flex-grow-0">
          <h4 className="font-medium text-lg leading-8">{name}</h4>
          <p className="font-normal text-[12px] text-gray-400">{desc}</p>
          <div className="flex justify-end items-center flex-row space-x-1.5">
            <StarIcon className="text-[#3A57E8] w-5" />
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex px-4 flex-col flex-grow shrink-0">
          <div className="flex flex-row space-x-1.5 flex-grow items-center justify-center">
            <CalendarIcon className="w-5 text-[#3A57E8]" />
            <p>{address}</p>
          </div>
          <div className="flex flex-row space-x-1.5 flex-grow items-center justify-center">
            <LocationMarkerIcon className="w-5 text-[#3A57E8]" />
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
