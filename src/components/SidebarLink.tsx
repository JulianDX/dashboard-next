"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarLinkProps = {
  title: string;
  subtitle: string;
  path: string;
  icon: JSX.Element;
};

const SidebarLink = ({ title, subtitle, path, icon }: SidebarLinkProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${
        path === pathName && "bg-blue-800 hover:bg-blue-300/60"
      }`}
    >
      {icon}
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};

export default SidebarLink;
