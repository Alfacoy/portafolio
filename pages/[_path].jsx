import { useRouter } from "next/router";
import Link from "next/link";
import Container from "../components/Container";
import ListGuides from "../components/ListGuides";
import ListProyects from "../components/ListProyects";

const Test = () => {
  const router = useRouter();
  const { _path } = router.query;

  return (
    <section>
      <header>
        <h1 className="title">{_path}</h1>
        <Link href="/">Volver atras</Link>
      </header>

      {_path == "lista de guias" ? <ListGuides /> : <ListProyects />}

      <style jsx>{`
        header {
          margin-bottom: 1.5em;
          text-align: center;
        }

        .title {
          line-height: 1.15;
          font-size: 3rem;
          text-transform: uppercase;
          margin: 0 0 50px 0;
        }

        .title span {
          color: #0070f3;
        }

        @media screen and (min-width: "800px") {
          .title {
            font-size: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Test;
