import { atom, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

export const messageRenderer = atom({
  key: "messageRenderer",
  default: {
    visible: false,
    message: "",
  },
});
