import { useParams } from "react-router-dom";
import { pillars } from "../pillarsData";
const SinglePillar = () => {
  const { id } = useParams();
  const pillarData = pillars.filter((item) => item.id == id);
  const { name } = pillarData[0];
  return <section>{name}</section>;
};

export default SinglePillar;
