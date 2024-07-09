"use client";

import Link from "next/link";

interface WidgetProps {
  label: string;
  icon: React.ReactNode;
  title: number;
  subtitle: string;
  href: string;
}

export const SimpleWidget = ({
  label,
  icon,
  title,
  subtitle,
  href,
}: WidgetProps) => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-600 text-center">{label}</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">{icon}</div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{title}</h4>
              <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          <Link
            href={`${href}`}
            className="text-indigo-600 text-xs font-medium"
          >
            Más
          </Link>
        </div>
      </div>
    </div>
  );
};
