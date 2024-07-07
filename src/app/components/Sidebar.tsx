import Image from "next/image";
import React from "react";
import { CalculatorIcon, HomeIcon } from "@heroicons/react/16/solid";
import SidebarLink from "./SidebarLink";
("@heroicons/react");

const NavLinks = [
  {
    title: "Dashboard",
    subtitle: "Resumen",
    path: "/dashboard/main",
    icon: <HomeIcon className="size-6 text-white" />,
  },
  {
    title: "Counter",
    subtitle: "Contador",
    path: "/dashboard/counter",
    icon: <CalculatorIcon className="size-6 text-white" />,
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 left-0 h-screen overflow-y-scroll w-80"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="profile picture"
              width={40}
              height={40}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Julián Roa</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {NavLinks.map((item) => (
          <SidebarLink key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
