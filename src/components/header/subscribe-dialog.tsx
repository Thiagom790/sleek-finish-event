import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { FormEvent } from "react";

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  z-index: 9999;
`;

const Content = styled(Dialog.Content)`
  opacity: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.colors.background};
  padding: 2rem;
  border-radius: ${(props) => props.theme.radius.default};
  width: min(90vw, ${(props) => props.theme.devices.small_screen});
  z-index: 9999;
  animation: contentShow 0.1s ease-in-out forwards;

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  & > form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      background-color: ${(props) => props.theme.colors.white};
      border: 0;
      border-radius: ${(props) => props.theme.radius.default};
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }

    button[type="submit"] {
      background-color: #f56f01;
      font-family: "Urbanist", sans-serif;
      font-weight: bold;
      color: ${(props) => props.theme.colors.white};
      border: 0;
      border-radius: ${(props) => props.theme.radius.default};
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        background-color: #fca311;
        color: ${(props) => props.theme.colors.white};
        transition: 0.3s;
      }
    }
  }
`;

const Title = styled(Dialog.Title)`
  font-size: 1.2rem;
  font-family: FashionFetishBold, system-ui, sans-serif;
  color: ${(props) => props.theme.colors.white};
  line-height: 1.2;
`;

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1rem;
  right: 1rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export function SubscribeDialog() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Inscreva-se para o curso super gratuito</Title>
        <CloseButton>
          <X size={20} />
        </CloseButton>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="tel" name="phone" placeholder="Seu celular" required />
          <input type="email" placeholder="Seu email" required />
          <button type="submit">Enviar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
