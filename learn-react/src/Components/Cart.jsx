import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Cart(props) {
 const style = !props.product.isInCart?{color:"#80808080" , cursor:"pointer"}:{cursor:"pointer"}
  return <FontAwesomeIcon icon={faCartShopping} style={style} onClick={()=>props.onClick(props.product)}/>;
}
