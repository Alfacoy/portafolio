import { DATA_PROYECTS as DATA } from "../../pages/API/API_proyects";
import Card from "../Card";

const ListProyects = () => {
  const lista = DATA.map((item) => {
    return (
      <li>
        <Card title={item.title} href={""} />
      </li>
    );
  });
  return <ul>{lista}</ul>;
};

export default ListProyects;
