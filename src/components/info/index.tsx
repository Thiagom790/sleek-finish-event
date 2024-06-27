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
    font-family: "Fashion Fetish", system-ui, sans-serif;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: 4rem;
  }

  p {
    font-size: 1.5rem;
    font-family: "Urbanist", sans-serif;
    line-height: 1.5;
    font-weight: bold;

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
          <p>
            Se o que te impede de usar Lace Wig é o acabamento, seja colada ou
            não. Agora isso acabou!
          </p>
          <p>
            Se prepare para o maior evento de Lace Wig que você já participou.
          </p>
          <p>
            Você vai aprender comigo a dar acabamento na sua Lace Wig nos seus
            penteados, deixando um acabamento elegante e os fios bem alinhados!
          </p>
        </TextContainer>
        <ImageContainer>
          <img src={tutorImg} alt="Professora Samyra" />
        </ImageContainer>
      </div>
    </Container>
  );
}
