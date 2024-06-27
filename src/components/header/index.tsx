import styled from "styled-components";
import HeroVideo from "./hero-video";

const Container = styled.header`
  width: min(100%, ${(props) => props.theme.devices.extra_large_screen});
  height: 100vh;
  max-height: 800px;
  position: relative;
  margin: 0 auto;

  & > .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background-color: rgba(122, 86, 62, 0.5);
    mix-blend-mode: darken;
  }
`;

const Content = styled.div`
  width: min(90vw, ${(props) => props.theme.devices.large_screen});
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    line-height: 1.5;
    font-family: "Fashion Fetish", system-ui, sans-serif;
    font-weight: bold;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.white};
    font-family: "Urbanist", sans-serif;
    font-size: 1.3rem;
    font-weight: bold;

    @media (max-width: ${(props) => props.theme.devices.small_screen}) {
      text-align: left;
    }
  }

  & .overlay {
    padding: 2rem;
    border-radius: ${(props) => props.theme.radius.default};
    width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Link = styled.a`
  align-self: stretch;
  font-family: "Urbanist", sans-serif;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  padding: 1rem 2rem;
  border: 0;
  border-radius: ${(props) => props.theme.radius.default};
  text-transform: uppercase;
  cursor: pointer;
  background-color: #07b21a;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #098117;
    color: ${(props) => props.theme.colors.white};
    transition: 0.3s;
  }
`;

export default function Header() {
  const isMobile = window.innerWidth < 600;

  return (
    <Container>
      <div className="overlay"></div>
      <HeroVideo />
      <Content>
        <div className="overlay">
          {isMobile ? (
            <h1>
              <span>Evento</span> <br /> Sleek Finish
            </h1>
          ) : (
            <h1>Evento Sleek Finish</h1>
          )}
          <p>
            Se inscreva para o Evento Sleek Finish, {!isMobile ? <br /> : ""} e
            aprenda a deixar um acabamento perfeito na sua Lace Wig!
          </p>
          <Link href="https://chat.whatsapp.com/DDnAECjh1mgBF7KJnm0njO">
            Entrar para o grupo vip
          </Link>
        </div>
      </Content>
    </Container>
  );
}
