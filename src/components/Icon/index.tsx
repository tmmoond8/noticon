/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import cx from 'classnames';
import NoticonSVG from './noticon.svg';
import GithubSVG from './github.svg';

interface IconProps {
  className?: string;
}

const Noticon = (props: IconProps) => {
  const { className } = props;
  return (
    <NoticonSVG
      css={css`
        width: 24px;
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
        width: 24px;
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
