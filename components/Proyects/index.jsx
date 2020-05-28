import Card from "../Card";
import style from "./style.module.scss";
import DATA from "../../data/data_proyects";

const Proyects = () => {
  const infoCard = [DATA[0], DATA[1], DATA[2]];

  return (
    <section className={style.proyects}>
      <h3 className="title__section">Proyectos</h3>
      <div className={style.proyect_grid}>
        <Card
          title={infoCard[0].title}
          href={infoCard[0].url}
          item={style.proyect_grid__1}
          path={"/lista de proyectos"}
        />
        <Card
          title={infoCard[1].title}
          href={infoCard[1].url}
          item={style.proyect_grid__2}
          path={"/lista de proyectos"}
        />
        <Card
          title={infoCard[2].title}
          href={infoCard[2].url}
          item={style.proyect_grid__3}
          path={"/lista de proyectos"}
        />
        <Card
          title={"Ver Más"}
          href={"/[_path]"}
          item={style.proyect_grid__4}
          link={true}
          path={"/lista de proyectos"}
        />
      </div>
    </section>
  );
};

export default Proyects;
