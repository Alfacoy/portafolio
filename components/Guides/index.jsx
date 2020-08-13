import Card from "../Card";
import DATA from "../../data/data_guides";
import style from "./style.module.scss";

const Guides = () => {
  const infoCard = [DATA.newest[0], DATA.newest[1], DATA.newest[2]];

  return (
    <section id="guides" className={style.guide}>
      <h3 className="title__section">Últimas Guías</h3>
      <article className={style.guide_grid}>
        <Card
          title={infoCard[0].title}
          href={infoCard[0].url}
          custom={`${style.guide_grid__1} bg__blue`}
        />

        <Card
          title={infoCard[1].title}
          href={infoCard[1].url}
          custom={`${style.guide_grid__2} bg__blue`}
        />

        <Card
          title={infoCard[2].title}
          href={infoCard[2].url}
          custom={`${style.guide_grid__3} bg__blue`}
        />

        <Card
          title={"Ver Más"}
          href={"/[_path]"}
          path={"/lista de guias"}
          custom={`${style.guide_grid__4} bg__yellow`}
        />
      </article>
    </section>
  );
};

export default Guides;
