import { atom, selector, useRecoilCallback } from "recoil";

export const messageRenderer = atom({
  key: "messageRenderer",
  default: false,
});

export const messageSetter = selector({
  key: "messageRenderer/set",
  get: ({ get }) => {
    return get(messageRenderer);
  },
  set: ({ set }) => {
    set(messageRenderer, true);
    useRecoilCallback(
      setTimeout(() => set(messageRenderer, false), 3000),
      []
    );
  },
});
