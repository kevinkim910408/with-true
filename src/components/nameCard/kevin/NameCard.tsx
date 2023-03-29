import styled from "styled-components";
import { useState } from "react";

const NameCard = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const tiltEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const offsetX = -(rect.left + rect.width / 2 - e.clientX) / 3;
    const offsetY = (rect.top + rect.height / 2 - e.clientY) / 3;

    setRotateX(offsetY);
    setRotateY(offsetX);
  };

  const resetTiltEffect = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <CardContainer onMouseMove={tiltEffect} onMouseLeave={resetTiltEffect}>
      <Card rotateX={rotateX} rotateY={rotateY}>
        <CardShadow />
        <CardInner>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Title</CardSubtitle>
        </CardInner>
      </Card>
    </CardContainer>
  );
};

export default NameCard;

const CardContainer = styled.div`
  position: relative;
  width: 320px;
  height: 490px;
  perspective: 1000px;
`;

const Card = styled.div<{ rotateX: number; rotateY: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #272727;
  border: 1px solid white;
  border-radius: 12px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: ${({ rotateX, rotateY }) =>
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`};
`;

const CardShadow = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardTitle = styled.h2`
  color: white;
  font-size: 24px;
`;

const CardSubtitle = styled.p`
  color: white;
  font-size: 18px;
  margin-top: 8px;
`;
