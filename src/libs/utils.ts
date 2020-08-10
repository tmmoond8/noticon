const isIOS = () => {
  const isClient = typeof window === 'object';
  if (!isClient) return false;
  return navigator.userAgent.match(/ipad|iphone/i);
};

export const copyText = (textarea: HTMLTextAreaElement) => {
  if (isIOS()) {
    const range = document.createRange();
    range.selectNodeContents(textarea);
    const selection = window.getSelection();
    selection!.removeAllRanges();
    selection!.addRange(range);
    textarea.setSelectionRange(0, 999999);
  } else {
    textarea.select();
  }
  document.execCommand('copy');
};

export const isServer = () => {
  return !(process as any).browser;
};

export const isBrowser = () => {
  return !isServer();
};
