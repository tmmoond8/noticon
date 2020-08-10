// const Noticon = './noticon.svg' as any;
// import Github from './Github';

// export default {
//   Noticon,
//   Github,
// };

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import cx from 'classnames';
import { colors } from 'notion-ui';
const NoticonSVG = require('./noticon.svg') as SVG;
const GithubSVG = require('./github.svg') as SVG;

interface IconProps {
  className?: string;
}

const Noticon = (props: IconProps) => {
  const { className } = props;
  return (
    <NoticonSVG
      css={css`
        width: 18px;
        color: ${colors.grey};
        fill: ${colors.grey};
        g {
          fill: currentColor;
        }
      `}
      className={cx('NoticonLogo', className)}
    />
  );
};

const Github = (props: IconProps) => {
  const { className } = props;

  return (
    <GithubSVG
      css={css`
        width: 18px;
        color: ${colors.grey};
        fill: ${colors.grey};
        g {
          fill: currentColor;
        }
      `}
      className={cx('GithubLogo', className)}
    />
  );
};

export default {
  Noticon,
  Github,
};
