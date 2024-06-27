import styled from "styled-components";
import heroVideoDesktop from "../../assets/hero-desktop.mov";
import heroVideoMobile from "../../assets/hero-mobile.mov";
import { useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-color: rgba(122, 86, 62, 0.5);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export default function HeroVideo() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const disableLoading = () => setIsLoading(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement?.addEventListener("loadeddata", disableLoading);

    return () => {
      videoElement?.removeEventListener("loadeddata", disableLoading);
    };
  }, []);

  return (
    <Container className="video-blur">
      <Blurhash
        hash="LJJ6{UnhUHWA72WVt7ofb_kDrrR+"
        width="100%"
        height="100%"
        resolutionX={32}
        resolutionY={32}
        style={{ display: isLoading ? "block" : "none" }}
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        ref={videoRef}
        style={{ display: isLoading ? "none" : "block" }}
      >
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
    </Container>
  );
}
