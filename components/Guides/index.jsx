//Components
import Card from "../Card";

//Data
import DATA from "../../data/data_guides";

//Style
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
          custom={`${style.guide_grid__1} effectHoverBlue opacityEffect`}
        />

        <Card
          title={infoCard[1].title}
          href={infoCard[1].url}
          custom={`${style.guide_grid__2} effectHoverBlue opacityEffect`}
        />

        <Card
          title={infoCard[2].title}
          href={infoCard[2].url}
          custom={`${style.guide_grid__3} effectHoverBlue opacityEffect`}
        />

        <Card
          title={"Ver Más"}
          href={"/[_path]"}
          path={"/lista de guias"}
          custom={`${style.guide_grid__4} effectHoverRose`}
        />
      </article>
    </section>
  );
};

export default Guides;
