/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { mobile, desktop } from '../../styles/mediaQuery';
import { useStore, observer } from '../../stores';
import IconBox from './IconBox';
import { colors } from 'notion-ui';

export default observer(function Gallery(): JSX.Element {
  const {
    icon: { icons, latestIcons, search, searchedIcons },
  } = useStore();
  return (
    <>
      {search.length === 0 && (
        <>
          {search.length === 0 && (
            <Grid caption="Latest" maxRows>
              {latestIcons.map((icon) => (
                <IconBox key={icon.uuid} {...icon} />
              ))}
            </Grid>
          )}
          <Grid caption={`Popular   (${icons.length})`}>
            {icons.map((icon) => (
              <IconBox key={icon.uuid} {...icon} />
            ))}
          </Grid>
        </>
      )}
      {search.length > 0 && (
        <Grid caption={`Search Results : "${search}"`}>
          {searchedIcons.map((icon) => (
            <IconBox key={icon.uuid} {...icon} />
          ))}
        </Grid>
      )}
    </>
  );
});

const Grid = styled.ol<{ caption: string; maxRows?: boolean }>`
  display: grid;
  grid-template-rows: 1fr;
  position: relative;
  grid-template-columns: repeat(3, 1fr);
  padding: 36px 0;

  & > li {
    min-height: 106px;
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

  &::after {
    content: '${(p) => p.caption}';
    position: absolute;
    left: 32px;
    top: 10px;
    color: ${colors.grey};
    font-size: 20px;
    font-weight: 500;
  }

  ${(p) =>
    p.maxRows &&
    css`
      li {
        display: none;
      }
      li:nth-child(-n + 6) {
        display: flex;
      }
      @media (min-width: 768px) {
        li:nth-child(-n + 8) {
          display: flex;
        }
      }

      @media (min-width: 1024px) {
        li:nth-child(-n + 12) {
          display: flex;
        }
      }73
    `}
`;
