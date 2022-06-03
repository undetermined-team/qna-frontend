import { atom, selector } from "recoil";

interface UserType {
  email: string;
  nickName: string;
  auth_status?: string;
}

export const userState = atom<UserType | null>({
  key: "user",
  default: null,
  dangerouslyAllowMutability: true,
});

export const signInStatus = selector<boolean>({
  key: "is_signed_in",
  get: ({ get }) => get(userState)?.auth_status === "approved",
});
