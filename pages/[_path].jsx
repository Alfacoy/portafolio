import { useRouter } from "next/router";
import Link from "next/link";
import ListGuides from "../components/ListGuides";
import ListProyects from "../components/ListProyects";

const List = () => {
  const router = useRouter();
  const { _path } = router.query;

  return (
    <section>
      <header className="path__header">
        <h1>{_path}</h1>
      </header>

      <article className="path__container">
        <Link href="/">
          <a className="btn__back">Volver atras</a>
        </Link>

        {_path == "lista de guias" ? <ListGuides /> : <ListProyects />}
      </article>
    </section>
  );
};

export default List;
