/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Content } from 'notion-ui';
import { mobile, desktop } from '../../styles/mediaQuery';
import { useStore, observer } from '../../stores';
import { Noticon } from '../../types';

interface GalleryProps {}

interface IconBoxProps extends Noticon {}

function IconBox(props: IconBoxProps) {
  const { title, imgUrl } = props;
  return (
    <IconWrapper>
      <img src={imgUrl} />
      <Content.Text as="P">{title}</Content.Text>
    </IconWrapper>
  );
}

const IconWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & > img {
    width: 65%;
    height: 65%;
    margin: 12px 0 0 0;
  }
`;

export default observer(function Gallery(props: GalleryProps): JSX.Element {
  const {
    icon: { icons },
  } = useStore();
  return (
    <Grid>
      {icons.map((icon) => (
        <IconBox key={icon.id} {...icon} />
      ))}
    </Grid>
  );
});

const Grid = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & > li {
    height: 33.33vw;
  }
  ${mobile(css`
    grid-template-columns: repeat(4, 1fr);
    & > li {
      height: calc((100vw - 240px) / 4);
    }
  `)}

  ${desktop(css`
    grid-template-columns: repeat(6, 1fr);
    & > li {
      height: calc((100vw - 240px) / 6);
    }
  `)}
`;
