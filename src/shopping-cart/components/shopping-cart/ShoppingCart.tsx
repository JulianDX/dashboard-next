"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, setCounter, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CartProps {
  value: number;
}

export interface Counter {
  counter: number;
}

const getCounter = async (): Promise<Counter> => {
  const data = await fetch("/api/counter").then((data) => data.json());

  return data;
};

const ShoppinCart = ({ value }: CartProps) => {
  const counter = useAppSelector((store) => store.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function callCounter() {
      const { counter } = await getCounter();
      dispatch(setCounter(counter));
    }
    callCounter();
  }, []);

  return (
    <>
      <div className="text-7xl font-bold">{counter}</div>
      <div className="flex gap-3 w-40">
        <button
          onClick={() => dispatch(substractOne())}
          className="bg-blue-900 w-full text-white font-semibold p-2 rounded-lg"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(addOne())}
          className="bg-blue-900 w-full text-white font-semibold p-2 rounded-lg"
        >
          +1
        </button>
      </div>
    </>
  );
};

export default ShoppinCart;
