import { useRouter } from "next/router";
import Container from "../components/Container";
import ListGuides from "../components/ListGuides";
import ListProyects from "../components/ListProyects";
import ListGuide from "../components/ListGuides";

const Test = () => {
  const router = useRouter();
  const { _path } = router.query;

  return (
    <Container>
      <h1 className="title">{_path}</h1>

      {_path == "lista de guias" ? <ListGuides /> : <ListProyects />}

      <style jsx>{`
        .title {
          line-height: 1.15;
          font-size: 3rem;
          text-align: center;
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
    </Container>
  );
};

export default Test;
