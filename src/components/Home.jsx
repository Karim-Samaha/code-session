import "../css/home.css";
import { pillars } from "../pillarsData";
import {
  DollarCircleOutlined,
  PlusOutlined,
  SketchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="homeSection">
      <h2>
        Get Support <SketchOutlined />
      </h2>

      {pillars.map((card) => {
        const { id, name, desc } = card;
        return (
          <div key={id} className="pillarCard">
            <img src="./assets/pillar2.jpg" alt="" />
            <div className="cardInfo">
              <h3>{name}</h3>
              <p className="cardDesc">{desc}</p>
              <div className="cardPrice">
                <p>100 DTSUs</p>
                <div className="cardIcons">
                  <DollarCircleOutlined />
                  <PlusOutlined />
                </div>
              </div>
            </div>
            <Link to={`./pillars/${id}`}></Link>
          </div>
        );
      })}

      {/* <div className="pillarCard">
        <img src="./assets/pillar2.jpg" alt="" />
        <div className="cardInfo"></div>
      </div>
      <div className="pillarCard"></div>
      <div className="pillarCard"></div>
      <div className="pillarCard"></div> */}
    </section>
  );
};

export default Home;
