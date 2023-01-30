import { useState } from "react";

function ButtonCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <hr />
      <h4>Button Counter Section</h4>
      <p>{counter}</p>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>

      <hr />
    </>
  );
}

export default ButtonCounter;
