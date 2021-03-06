const isIOS = () => {
  const isClient = typeof window === 'object';
  if (!isClient) return false;
  return navigator.userAgent.match(/ipad|iphone/i);
};

export const copyText = (text: string) => {
  const tempTextareaElement = document.createElement('textarea');
  tempTextareaElement.style.position = 'absolute';
  tempTextareaElement.style.left = '-9999px';
  tempTextareaElement.value = text;
  tempTextareaElement.readOnly = true;
  document.body.appendChild(tempTextareaElement);
  copyElementText(tempTextareaElement);
  document.body.removeChild(tempTextareaElement);
};

const copyElementText = (textarea: HTMLTextAreaElement) => {
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

export const isLocalhost = () =>
  Boolean(
    (globalThis as any).location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      (globalThis as any).location.hostname === '[::1]' ||
      // 127.0.0.0/8 are considered localhost for IPv4.
      (globalThis as any).location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
      ),
  );
