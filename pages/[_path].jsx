//NextJs
import { useRouter } from "next/router";
import Link from "next/link";

//Components
import Container from "../components/Container";
import ListGuides from "../components/ListGuides";
import ListProyects from "../components/ListProyects";

const List = () => {
  const router = useRouter();
  const { _path } = router.query;

  return (
    <Container>
      <section className="path__container ">
        <header className="path__header">
          <h2>{_path}</h2>
        </header>

        <article>
          <Link href="/">
            <a className="btn btn__back effectHoverRose">Volver atrás</a>
          </Link>

          {_path == "lista de guias" ? <ListGuides /> : <ListProyects />}
        </article>
      </section>
    </Container>
  );
};

export default List;
