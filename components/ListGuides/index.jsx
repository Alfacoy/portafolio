import Card from "../Card";
import DATA from "../../data/data_guides";

const ListGuide = () => {
  const lista = DATA.map((item, index) => {
    return (
      <li key={index}>
        <Card title={item.title} href={item.url} item={""} />
      </li>
    );
  });

  return <ul>{lista}</ul>;
};

export default ListGuide;
