import React from 'react';
import IconBox from '../IconBox';
import styled, { withProps } from '../../styles/typed-components';
import { Noticon } from '../../types';

const devices = {
  desktop: {
    size: 165.33,
    unit: 'px',
    column: 6,
  },
  tablet: {
    size: 25,
    unit: 'vw',
    column: 4,
  },
  phone: {
    size: 33.33,
    unit: 'vw',
    column: 3,
  }
}

interface IProps {
  iconList: Noticon[];
  hitIconList: Set<any>;
  device: 'desktop' | 'tablet' | 'phone' | 'ssr';
  iconListMax: number;
}

interface IIconItemProps {
  x: string;
  y: string;
}

interface IBoxSize {
  size: number; 
  unit: string;
  column: number;
}

const StyledGallery = withProps<any, HTMLDivElement>(styled.div)`
  ul {
    position: relative;
    height: 400px;
    max-width: 992px;
    margin: 0 auto;

    ${props => props.theme.media.tablet`
      width: 100%;
    `};
  }
  li {
    position: absolute;
    width: ${devices.desktop.size}${devices.desktop.unit};
    height: ${devices.desktop.size}${devices.desktop.unit};

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

const reservedSet = new Set();

const renderIconList = (boxSize: IBoxSize, iconList: any[], hitIconList: Set<number>, iconListMax: number) => {
  const { size, unit, column } = boxSize;
  let index = -1;
  return (
    <ul>
      {iconList.map((item) => (
        hitIconList.has(item.id) && index < iconListMax && index++,
        <IconItem key={item.id} 
          x={`${hitIconList.has(item.id) && index < iconListMax ? (index % column) * size : -9999}${unit}`} 
          y={`${hitIconList.has(item.id) && index < iconListMax ? (Math.floor(index / column)) * size : 0 }${unit}`}
        >
          {index < iconListMax && reservedSet.add(item.id) && false}
          <IconBox 
            visible={reservedSet.has(item.id)} 
            imgUrl={!reservedSet.has(item.id) ? 'https://res.cloudinary.com/dgggcrkxq/image/upload/v1566997355/noticon/ozi8wvb2o2qdcijs2u29.png' : item.imgUrl} 
            title={item.title}
            keywords={item.keywords}
          />
        </IconItem>
      ))}
    </ul>
  );
}

const Gallery = (props: IProps) => {
  const { iconList=[], device, hitIconList, iconListMax } = props;
  const boxSize = devices[device];

  return (
    <StyledGallery>
      { device === 'ssr' ? false : renderIconList(boxSize, iconList, hitIconList, iconListMax)}
    </StyledGallery>
  )
}

export default Gallery;