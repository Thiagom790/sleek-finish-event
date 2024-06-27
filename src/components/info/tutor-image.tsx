import styled from "styled-components";
import tutorImg from "../../assets/tutor.png";
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }

  .image-blur {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${(props) => props.theme.radius.default};
    overflow: hidden;
  }
`;

export default function TutorImage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = tutorImg;
    img.onload = () => setIsLoading(false);
  }, []);

  return (
    <ImageContainer>
      <div
        className="image-blur"
        style={{ display: isLoading ? "block" : "none" }}
      >
        <Blurhash
          hash="LKI:^D-pu69u0yRPrqxa%h%hwb-B"
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
        />
      </div>
      <img
        src={tutorImg}
        alt="Professora Samyra"
        style={{ display: isLoading ? "none" : "block" }}
      />
    </ImageContainer>
  );
}
