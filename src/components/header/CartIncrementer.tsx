import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { CartContext } from "../context/CartContext";
import { PropertySignature } from "typescript";

interface IProps {
  quantity: number;
}

function GroupedButtons(props: IProps){
  let [count, setCounter] = useState<number>(0);
  const { cart } = useContext(CartContext)

 
  function handleIncrement() {
    setCounter(count += 1);
  };

  function handleDecrement() {
    setCounter(count -= 1);
  };

    /* const displayCounter = count > 0; */
    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={handleIncrement}>+</Button>
        <Button disabled>{props.quantity}</Button>
        <Button onClick={handleDecrement}>-</Button>
      </ButtonGroup>
    );
}

export default GroupedButtons;
