//Components
import Card from "../Card";

//Data
import DATA from "../../data/data_proyects";

//Style
import style from "./style.module.scss";

const Proyects = () => {
  const infoCard = [DATA[0], DATA[1], DATA[2]];

  return (
    <section className={style.proyects}>
      <h3 className="title__section">Proyectos</h3>
      <article className={style.proyect_grid}>
        <Card
          title={infoCard[0].title}
          href={infoCard[0].url}
          path={"/lista de proyectos"}
          custom={`${style.proyect_grid__1} effectHoverBlue opacityEffect`}
        />
        <Card
          title={infoCard[1].title}
          href={infoCard[1].url}
          path={"/lista de proyectos"}
          custom={`${style.proyect_grid__2} effectHoverBlue opacityEffect`}
        />
        <Card
          title={infoCard[2].title}
          href={infoCard[2].url}
          path={"/lista de proyectos"}
          custom={`${style.proyect_grid__3} effectHoverBlue opacityEffect`}
        />
        <Card
          title={"Ver Más"}
          href={"/[_path]"}
          path={"/lista de proyectos"}
          custom={`${style.proyect_grid__4} effectHoverRose`}
        />
      </article>
    </section>
  );
};

export default Proyects;
