import styled from "styled-components";
import Header from "../../components/header";
import Info from "../../components/info";

const Container = styled.main`
  width: min(100%, ${(props) => props.theme.devices.extra_large_screen});
  margin: 0 auto;
`;

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Info />
      </Container>
    </>
  );
}
