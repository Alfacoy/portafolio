import Container from "../components/Container";
import Card from "../components/Card";

const Home = () => (
  <Container>
    <>
      <h1 className="title">
        Brian Durand <span>Frontend Dev</span>
      </h1>

      <div className="main">
        <div className="main__text">
          <p>
            Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,
            pero la mayoría sufrió alteraciones en alguna manera, ya sea porque
            se le agregó humor, o palabras aleatorias que no parecen ni un poco
            creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás
            estar seguro de que no hay nada avergonzante escondido en el medio
            del texto. Todos los generadores de Lorem Ipsum que se encuentran en
            Internet tienden a repetir trozos predefinidos cuando sea necesario,
            haciendo a este el único generador verdadero (válido) en la
            Internet. Usa un diccionario de mas de 200 palabras provenientes del
            latín, combinadas con estructuras muy útiles de sentencias, para
            generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum
            generado siempre estará libre de repeticiones, humor agregado o
            palabras no características del lenguaje, etc.
          </p>
          <div className="main__buttons">
            <a href="#guides" className="btn">
              Ver Mas
            </a>
          </div>
        </div>
        <div className="main__image">
          <img src="images/test.png" alt="Imagen de test" />
        </div>
      </div>
    </>
  </Container>
);

export default Home;
