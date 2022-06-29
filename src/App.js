import { Layout } from "antd";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar";
import FooterComponent from "./components/Footer";
import Home from "./components/Home";
import SinglePillar from "./components/SinglePillar";
import Cart from "./components/Cart";
import Kitchen from "./components/Kitchen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider style={{ backgroundColor: "#0097C2" }} width={40}>
          Sider
        </Sider>
        <Layout>
          <Header style={{ backgroundColor: "white" }}>
            <Navbar />
          </Header>
          <Cart />
          <Kitchen />
          <Content>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route
                exact
                path="/pillars/:id"
                element={<SinglePillar />}
              ></Route>
            </Routes>
          </Content>
          <Footer>
            <FooterComponent />
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
