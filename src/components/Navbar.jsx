import "../css/navbar.css";
import { ShoppingCartOutlined, SnippetsOutlined } from "@ant-design/icons";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { handeCartModule, handeKitchenModule } = useGlobalContext();
  return (
    <nav>
      <div className="navLeft">
        <h1>Welcome to IcloudReady</h1>
        <h2>You have started your 30 days trial</h2>
      </div>
      <div className="navCenter">
        <div className="imgContainer">
          <img src="./assets/person1.png" alt="" />
          <img src="./assets/person2.png" alt="" />
          <img src="./assets/person3.png" alt="" />
          <img src="./assets/person4.png" alt="" />
          <img src="./assets/person5.png" alt="" />
        </div>
        <div className="navCenterText">
          <h2>Our architects are here to help</h2>
          <p>Book a free session</p>
        </div>
      </div>
      <div className="navRight">
        <ShoppingCartOutlined onClick={handeCartModule} />
        <SnippetsOutlined onClick={handeKitchenModule} />
      </div>
    </nav>
  );
};
export default Navbar;
