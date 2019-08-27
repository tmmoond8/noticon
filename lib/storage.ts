const isServer = typeof window !== "object";
const KEY_NOTICON = "noticon_icons";

export default {
  get(): any[] | null {
    if (isServer) return null;
    const icons = localStorage.getItem(KEY_NOTICON);
    return icons ? JSON.parse(icons) : null;
  },
  set(value) {
    if (isServer) return;
    localStorage.setItem(KEY_NOTICON, JSON.stringify(value));
    return;
  }
}

