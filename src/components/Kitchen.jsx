import { useGlobalContext } from "../context";
import { CloseCircleOutlined, CloudOutlined } from "@ant-design/icons";

import "../css/kitchen.css";
const Kitchen = () => {
  const { handeKitchenModule, kitchen } = useGlobalContext();
  return (
    <div style={{ right: kitchen ? "0%" : "-355px" }} className="kitchen">
      <div className="kitchenHeader">
        <div>
          <CloseCircleOutlined onClick={handeKitchenModule} />
          <h3>Your Run Kitchen</h3>
        </div>
        <div className="headerRight">
          Requests inrun kitchen
          <span>3</span>
        </div>
      </div>
      <div className="requests">
        <h4>Requests</h4>
        <div>
          <span>Status </span>
          <span> O/P Link</span>
        </div>
      </div>
      <div className="products">
        <div className="product">
          <div className="productLeft">
            <h3>Knowledge Transfer</h3>
            <h4>Private Training, 12.00 DTSU</h4>
          </div>
          <div className="productRight">
            <CloudOutlined />
            <CloudOutlined />
          </div>
        </div>
        <div className="product">
          <div className="productLeft">
            <h3>Knowledge Transfer</h3>
            <h4>Private Training, 12.00 DTSU</h4>
          </div>
          <div className="productRight">
            <CloudOutlined />
            <CloudOutlined />
          </div>
        </div>
        <div className="product">
          <div className="productLeft">
            <h3>Knowledge Transfer</h3>
            <h4>Private Training, 12.00 DTSU</h4>
          </div>
          <div className="productRight">
            <CloudOutlined />
            <CloudOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
