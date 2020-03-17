import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
  incrementByAmount,
  incrementAsync
} from "./counter/counterSlice";

export default function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        value={incrementAmount}
        onChange={e => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
        add ammount
      </button>
      <button onClick={() => dispatch(incrementAsync(Number(incrementAmount)))}>
        async
      </button>
    </div>
  );
}
