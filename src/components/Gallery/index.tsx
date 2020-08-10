/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { mobile, desktop } from '../../styles/mediaQuery';
import { useStore, observer } from '../../stores';
import IconBox from './IconBox';

interface GalleryProps {}

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
