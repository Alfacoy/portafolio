import { useRouter } from "next/router";
import Link from "next/link";
import CustomHead from "../components/CustomHead";
import ListGuides from "../components/ListGuides";
import ListProyects from "../components/ListProyects";

const List = () => {
  const router = useRouter();
  const { _path } = router.query;

  return (
    <section className="path__container">
      <CustomHead />
      <header className="path__header">
        <h2>{_path}</h2>
      </header>

      <article>
        <Link href="/">
          <a className="btn__back">Volver atrás</a>
        </Link>

        {_path == "lista de guias" ? <ListGuides /> : <ListProyects />}
      </article>
    </section>
  );
};

export default List;
