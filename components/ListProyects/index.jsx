//Components
import Card from "../Card";

//Data
import DATA from "../../data/data_proyects";

const ListProyects = () => {
  const lista = DATA.map((item, index) => {
    return (
      <li key={index}>
        <Card
          title={item.title}
          href={item.url}
          custom={"effectHoverBlue opacityEffect"}
        />
      </li>
    );
  });
  return <ul>{lista}</ul>;
};

export default ListProyects;
