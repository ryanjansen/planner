import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {}

interface ITimelineBar {
  position: number
}

const TimelineBar = styled.div<ITimelineBar>`
  position: absolute;
  height: ${props => (props.position)}%;
  left: 0;
  border-bottom: 1px solid red;
  width: 300px;
  transition: height 0.1s linear;
`;

function Timeline({}: Props): ReactElement {
  const [position, setPosition] = useState(10);

  const moveDown = () => {
    setPosition(prevPosition => prevPosition + 0.1);
  };

  useEffect(() => {
    setInterval(moveDown, 100);
  }, []);

  return <TimelineBar position={position} />;
}

export default Timeline;
