import { SortMode } from '../types';
const isServer = typeof window !== "object";
const KEY_NOTICON = "noticon_icons";
const SORT_MODE = "noticon_sort_mode";

export default {
  getIcons(): any[] | null {
    if (isServer) return null;
    const icons = localStorage.getItem(KEY_NOTICON);
    return icons ? JSON.parse(icons) : null;
  },
  setIcons(value) {
    if (isServer) return;
    localStorage.setItem(KEY_NOTICON, JSON.stringify(value));
    return;
  },
  getMode(): SortMode {
    if (isServer) return "date";
    const sortMode: string | null = localStorage.getItem(SORT_MODE);
    return sortMode ? sortMode as SortMode : "date";
  },
  setMode(value: SortMode) {
    localStorage.setItem(SORT_MODE, value);
  }
}

