import styled from "styled-components";
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

const tutorSrc =
  "https://thiagom790.github.io/sleek-finish-event-assets/images/tutor.png";

export default function TutorImage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoading(false);
    img.src = tutorSrc;
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
        src={tutorSrc}
        alt="Professora Samyra"
        style={{ display: isLoading ? "none" : "block" }}
      />
    </ImageContainer>
  );
}
