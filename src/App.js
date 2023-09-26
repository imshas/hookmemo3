import React, { useMemo, useState } from "react";
import { initialItems } from "./data";

const App = () => {
  
  const [count, setCount] = useState(0);

  const [items] = useState(initialItems);

  const incCount = () => {
    setCount(count + 1);
  }

  const selectedItem = useMemo(() => (
    items.find((item) => item.isSelected)
  ), [items])
  return(
    <>
      <h1>Count: {count}</h1>
      <p>Items: {selectedItem?.id}</p>
      <button onClick={incCount}>COUNT</button>
    </>
  )
}

export default App;