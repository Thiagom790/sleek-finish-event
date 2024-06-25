import styled from "styled-components";
import heroVideoDesktop from "../../assets/hero-desktop.mp4";
import heroVideoMobile from "../../assets/hero-mobile.mp4";
import { SubscribeDialog } from "./subscribe-dialog";
import * as Dialog from "@radix-ui/react-dialog";

const Container = styled.header`
  width: min(100%, ${(props) => props.theme.devices.extra_large_screen});
  height: 100vh;
  max-height: 800px;
  position: relative;
  margin: 0 auto;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 1;
  }

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
    font-family: FashionFetishBold, system-ui, sans-serif;
  }

  p {
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.white};
    font-family: "Urbanist", sans-serif;
    font-size: 1.2rem;
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

const Button = styled.button`
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
  background-color: #f56f01;

  &:hover {
    background-color: #fca311;
    color: ${(props) => props.theme.colors.white};
    transition: 0.3s;
  }
`;

export default function Header() {
  const isMobile = window.innerWidth < 600;

  return (
    <Container>
      <div className="overlay"></div>
      <video autoPlay muted loop>
        <source
          src={heroVideoDesktop}
          type="video/mp4"
          media="only screen and (min-width: 600px)"
        />
        <source
          src={heroVideoMobile}
          type="video/mp4"
          media="only screen and (max-width: 600px)"
        />
      </video>
      <Content>
        <div className="overlay">
          {isMobile ? (
            <h1>
              <span>Evento</span> <br /> Sleek Finish
            </h1>
          ) : (
            <h1>Evento Sleek Finish</h1>
          )}
          <p>Se inscreva para o evento Lace Wig com acabamento elevante</p>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button>Quero participar</Button>
            </Dialog.Trigger>
            <SubscribeDialog />
          </Dialog.Root>
        </div>
      </Content>
    </Container>
  );
}
