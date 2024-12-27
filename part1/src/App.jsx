import { useState } from "react"
import Button from "./components/Button"
import Display from "./components/Display";
import History from "./components/History";

const App = () => {
  const [count, setCount] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setCount(count + 1);
    setAll(allClicks.concat("Left"))
  };
  
  const handleRightClick = () => {
    setCount(count - 1);
    setAll(allClicks.concat("Right"))
  };

  const handleMiddleClick = () => {
    setCount(0);
    setAll(allClicks.concat("Clear"))
  };

  return (
    <div>
      <Display value={count}/>
      <Button handleClick={handleLeftClick} text="Plus"/>
      <Button handleClick={handleMiddleClick} text="Clear"/>
      <Button handleClick={handleRightClick} text="Minus"/>
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App
