import Container from "../components/Container";
import Guides from "../components/Guides";

import Card from "../components/Card";

const Home = () => (
  <Container>
    <h1 className="title">
      Brian Durand <span>Frontend Dev</span>
    </h1>

    <p>
      Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la
      mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó
      humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a
      utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay
      nada avergonzante escondido en el medio del texto. Todos los generadores
      de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos
      predefinidos cuando sea necesario, haciendo a este el único generador
      verdadero (válido) en la Internet. Usa un diccionario de mas de 200
      palabras provenientes del latín, combinadas con estructuras muy útiles de
      sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este
      Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado
      o palabras no características del lenguaje, etc.
    </p>
    <Card
      title={"Proyectos"}
      href={"/[_path]"}
      link={true}
      path={"/lista de proyectos"}
    />
    <Guides />

    <style jsx>{`
      .title {
        line-height: 1.15;
        font-size: 3rem;
        text-align: center;
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

export default Home;
