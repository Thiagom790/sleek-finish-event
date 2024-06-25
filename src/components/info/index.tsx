import styled from "styled-components";
import tutorImg from "../../assets/tutor.png";

const Container = styled.section`
  background-color: ${(props) => props.theme.colors.background};

  .content {
    padding: 4rem 0;
    width: min(90vw, ${(props) => props.theme.devices.large_screen});
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    @media (max-width: ${(props) => props.theme.devices.medium_screen}) {
      grid-template-columns: 1fr;
    }
  }
`;

const TextContainer = styled.div`
  color: ${(props) => props.theme.colors.white};

  h2 {
    font-size: 2rem;
    font-family: FashionFetishBold, system-ui, sans-serif;
    line-height: 1.5;
    margin-bottom: 4rem;
  }

  p {
    font-size: 1.2rem;
    font-family: "Urbanist", sans-serif;
    line-height: 1.5;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default function Info() {
  return (
    <Container>
      <div className="content">
        <TextContainer>
          <h2>Aprenda de forma fácil e simples como aplicar Lace Wig</h2>
          <p>
            Se prepare para o maior evento de aplicação de Lace Wig que você já
            participou.
          </p>
          <p>
            Se o que te impedia de usar lace era acabamento, seja colada ou sem
            colar, agora não será mais.
          </p>
          <p>
            E não acaba por aí, você vai aprender comigo a dar acabamento nos
            seus penteados, deixando eles bem alinhados.
          </p>
          <p>
            E olha só, eu ainda criei um grupo no WhatsApp para não correr o
            risco de você perder o evento Sleek Finish, um evento gratuito e
            100% online.
          </p>
        </TextContainer>
        <ImageContainer>
          <img src={tutorImg} alt="Professora Samyra" />
        </ImageContainer>
      </div>
    </Container>
  );
}
