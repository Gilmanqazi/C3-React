import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../state/cartSlice";

export const useCart = ()=>{
  const disptach = useDispatch()

  const {cart,totalQuantity,totalPrice} = useSelector((state)=>state.cart)

  const addItemToCart = (product)=>{
    disptach(addToCart(product))
    alert("Added To Cart")
  }

  return {
    cart,
    totalQuantity,
    totalPrice,
    addItemToCart,
  };
}