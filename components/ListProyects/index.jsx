import DATA from "../../data/data_proyects";
import Card from "../Card";

const ListProyects = () => {
  const lista = DATA.map((item, index) => {
    return (
      <li key={index}>
        <Card title={item.title} href={item.url} custom={"bg__blue"} />
      </li>
    );
  });
  return <ul>{lista}</ul>;
};

export default ListProyects;
