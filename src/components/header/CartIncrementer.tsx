import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { CartContext } from "../context/CartContext";



function GroupedButtons(){
  let [count, setCounter] = useState<number>(0);
  const { cart } = useContext(CartContext)
  console.log(cart)
 
  function handleIncrement() {
    setCounter(count += 1);
  };

  function handleDecrement() {
    setCounter(count -= 1);
  };

    const displayCounter = count > 0;
    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={handleIncrement}>+</Button>
        {displayCounter && <Button disabled>{cart.quantity}</Button>}
        {displayCounter && <Button onClick={handleDecrement}>-</Button>}
      </ButtonGroup>
    );
}

export default GroupedButtons;
