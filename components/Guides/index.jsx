import style from "./style.module.scss";
import Card from "../Card";
import DATA from "../../data/data_guides";

const Guides = () => {
  const infoCard = [DATA[0], DATA[1], DATA[2]];

  return (
    <section id="guides" className={style.guide}>
      <h3 className="title__section">Ultimas Guias</h3>
      <div className={style.guide_grid}>
        <Card
          title={infoCard[0].title}
          href={infoCard[0].url}
          custom={style.guide_grid__1}
        />

        <Card
          title={infoCard[1].title}
          href={infoCard[1].url}
          custom={style.guide_grid__2}
        />

        <Card
          title={infoCard[2].title}
          href={infoCard[2].url}
          custom={style.guide_grid__3}
        />

        <Card
          title={"Ver Más"}
          href={"/[_path]"}
          path={"/lista de guias"}
          custom={style.guide_grid__4}
        />
      </div>
    </section>
  );
};

export default Guides;
