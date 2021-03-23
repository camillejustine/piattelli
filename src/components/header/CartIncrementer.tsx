import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { CartContext } from "../context/CartContext";
import { PropertySignature } from "typescript";
import { Product } from "../context/ProductsContext";

interface IProps {
  product: any;
}

function GroupedButtons(props: IProps){
  let [count, setCounter] = useState<number>(0);
  const { addToCart, removeProductFromCart } = useContext(CartContext)

  console.log(props.product.quantity)

    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={() => {
          addToCart(props.product)
        }}>+</Button>
        <Button disabled>{props.product.quantity}</Button>
        <Button onClick={() => {
          removeProductFromCart(props.product)
        }}>-</Button>
      </ButtonGroup>
    );
}

export default GroupedButtons;
