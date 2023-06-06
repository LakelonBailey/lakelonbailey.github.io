import React, { useEffect, useRef } from "react"
import styled from "styled-components";

const MasonryImageWrapper = styled.div`
  width: 100%;
  display: block;
  transition: transform .3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
    z-index: 800;

    & div {
      opacity: .5;
    }

    & img {
      box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    }
  }

  & div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    opacity: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
    border-radius: 15px;

    & p {
      text-align: center;
      font-weight: 700;
    }
  }

  & img {
    height: 100%;
    width: 100%;
    border-radius: 15px;
  }
`;

const MasonryImage = ({image, handleImageClick}) => {
    const imgRef = useRef(null);
    const divRef = useRef(null);

    const handleImageLoadAndResize = () => {
      if (imgRef.current && divRef.current) {
        divRef.current.style.height = `${imgRef.current.clientHeight}px`;
      }
    }

    useEffect(() => {
      handleImageLoadAndResize();

      window.addEventListener('resize', handleImageLoadAndResize);
      return () => window.removeEventListener('resize', handleImageLoadAndResize);
    }, []);

    return (
      <MasonryImageWrapper>
        <div ref={divRef} onClick={handleImageClick}>
          <p>View More</p>
        </div>
        <img
          ref={imgRef}
          src={image.src}
          alt=""
          onLoad={handleImageLoadAndResize}
        />
      </MasonryImageWrapper>
    )
}

export default MasonryImage;