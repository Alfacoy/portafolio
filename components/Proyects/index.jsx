import Card from "../Card";
import style from "./style.module.scss";

const Proyects = () => {
  return (
    <section className={style.Proyects}>
      <h3>Proyectos</h3>
      <div className="flex">
        <Card
          title={"Proyecto 1"}
          href={"/[_path]"}
          item={style.card__proyect}
          link={true}
          path={"/lista de proyectos"}
        />
        <Card
          title={"Proyecto 2"}
          href={"/[_path]"}
          item={style.card__proyect}
          link={true}
          path={"/lista de proyectos"}
        />
        <Card
          title={"Proyecto 3"}
          href={"/[_path]"}
          item={style.card__proyect}
          link={true}
          path={"/lista de proyectos"}
        />
      </div>
      <Card
        title={"Ver Más"}
        href={"/[_path]"}
        link={true}
        path={"/lista de proyectos"}
      />
    </section>
  );
};

export default Proyects;
