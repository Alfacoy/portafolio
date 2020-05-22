import Card from "../Card";
import { DATA_GUIDES as DATA } from "../../pages/API/API_guides";

const ListGuide = () => {
  const lista = DATA.map((item, index) => {
    return (
      <li>
        <Card title={item.title} href={item.url} item={""} />
      </li>
    );
  });

  return <ul>{lista}</ul>;
};

export default ListGuide;
