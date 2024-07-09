"use client";

import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { useAppSelector } from "@/store";

export const MainGrid = () => {
  const counter = useAppSelector((store) => store.counter.count);
  return (
    <div className="grid grid-cols-3">
      <SimpleWidget
        label={"Contador"}
        icon={<ShoppingCartIcon className="size-12" />}
        title={counter}
        subtitle={"Global State"}
        href={"/dashboard/counter"}
      />
    </div>
  );
};

export default MainGrid;
