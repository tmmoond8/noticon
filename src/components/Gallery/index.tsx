/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { mobile, desktop } from '../../styles/mediaQuery';
import { useStore, observer } from '../../stores';
import IconBox from './IconBox';
import { Loader } from 'notion-ui';

interface GalleryProps {}

export default observer(function Gallery(props: GalleryProps): JSX.Element {
  const {
    icon: { icons, isLoaded },
  } = useStore();
  return (
    <>
      {isLoaded ? (
        <Grid>
          {icons.map((icon) => (
            <IconBox key={icon.id} {...icon} />
          ))}
        </Grid>
      ) : (
        <Loader.ParentFull />
      )}
    </>
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
    max-width: 900px;
    margin: 0 auto;
    grid-template-columns: repeat(6, 1fr);
    & > li {
      height: calc((100vw - 240px) / 6);
      max-height: 150px;
    }
  `)}
`;
