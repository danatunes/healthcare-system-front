import { Suspense, useState } from "react";
import { List, UserCard } from "../../../components";
import { Link, Outlet } from "react-router-dom";
import clsx from "clsx";

export const DoctorProfileForPatient = () => {
  const [listPage, setListPage] = useState(null);
  return (
    <div className="space-y-4">
      <UserCard />
      <List
        className="shadow-md h-fit max-h-[450px]"
        header={
          <div className="w-full flex flex-row justify-between">
            <Link
              to=""
              onClick={() => setListPage(null)}
              className={clsx(
                "font-medium text-lg focus:text-[#3A57E8]",
                listPage === null && "text-[#3A57E8]"
              )}
            >
              About Me
            </Link>
            <Link
              to="feedback"
              onClick={() => setListPage("feedback")}
              className={clsx("font-medium text-lg focus:text-[#3A57E8]")}
            >
              Feedback
            </Link>
            <Link
              to="calendar"
              onClick={() => setListPage("calendar")}
              className="font-medium text-lg focus:text-[#3A57E8]"
            >
              Calendar
            </Link>
          </div>
        }
      >
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </List>
    </div>
  );
};
