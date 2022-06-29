import "../css/cart.css";
import { CloseCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useGlobalContext } from "../context";
import { useEffect } from "react";
const Cart = () => {
  const { handeCartModule, cart } = useGlobalContext();
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <section style={{ right: cart ? "0%" : "-355px" }} className="cart">
      <div className="cartHead">
        <CloseCircleOutlined onClick={handeCartModule} />
        <span>Your Run Cart</span>
      </div>
      <div className="cartBody">
        <ShoppingCartOutlined />
        <p>Your Cart Is Empty!</p>
        <p>start add your requests here</p>
      </div>
    </section>
  );
};

export default Cart;
