import React, { useRef } from 'react';
import IconBox from '../IconBox';
import styled, { withProps } from '../../styles/typed-components';

interface IProps {
  iconList: any[];
  hitIconList: Set<any>;
  setHeight: (height: number) => undefined;
  device: 'desktop' | 'tablet' | 'phone';
}

interface IIconItemProps {
  x: string;
  y: string;
}

interface IBoxSixe {
  size: number;
  unit: string;
  column: number;
}

const StyledGallery = withProps<any, HTMLDivElement>(styled.div)`
  ul {
    position: relative;
    height: 400px;
    width: 980px;
    background-color: lightgrey;

    ${props => props.theme.media.tablet`
      width: 100%;
    `};
  }
  li {
    position: absolute;
    width: 163.33px;
    height: 163.33px;

    ${props => props.theme.media.tablet`
      width: 25vw;
      height: 25vw;
    `};
    ${props => props.theme.media.phone`
      width: 33.33vw;
      height: 33.33vw;
    `};
  }
`;

const IconItem = withProps<IIconItemProps, HTMLLIElement>(styled.li)`
  transform: translate(${props => props.x}, ${props => props.y});
`

const renderIconList = (boxSize: IBoxSixe, iconList: any[], hitIconList: Set<number>) => {
  const { size, unit, column } = boxSize;
  let index = -1;
  return (
    <>
      {iconList.map((item) => (
        hitIconList.has(item.id) && index++,
        <IconItem key={item.id} 
          x={`${hitIconList.has(item.id) ? (index % column) * size : -9999}${unit}`} 
          y={`${(Math.floor(index / column)) * size}${unit}`}
        >
          <IconBox imgUrl={item.imgUrl} title={item.title}/>
        </IconItem>
      ))}
    </>
  );
}

const Gallery = (props: IProps) => {
  const { iconList=[], setHeight, device, hitIconList } = props;
  setHeight(433);
  const boxSize = {
    size: 163.33,
    unit: 'px',
    column: 6,
  };
  if (device === 'tablet') {
    boxSize.size = 25;
    boxSize.unit = 'vw';
    boxSize.column = 4;
  } else if(device === 'phone') {
    boxSize.size = 33.33;
    boxSize.unit = 'vw';
    boxSize.column = 3;
  }

  return (
    <StyledGallery>
      <ul style={{ height: `${(Math.floor((hitIconList.size - 1) / boxSize.column) + 1) * boxSize.size}${boxSize.unit}`}}>
        {renderIconList(boxSize, iconList, hitIconList)}
      </ul>
    </StyledGallery>
  )
}

export default Gallery;