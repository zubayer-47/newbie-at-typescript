import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  counterSelector,
  incrementByName,
} from "./features/Counter/counterSlice";

export default function App() {
  const counter = useAppSelector(counterSelector);
  const dispatch = useAppDispatch();

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      incrementByName({
        person: {
          age: 20,
          count: 10,
          name: "Mahfuz",
        },
      })
    );
  };

  return (
    <div className="text-indigo-500">
      <p>{counter.value}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
