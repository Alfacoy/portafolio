import DATA from "../../data/data_proyects";
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
