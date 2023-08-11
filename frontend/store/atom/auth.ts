// recoil/atoms/auth.ts
import { atom } from "recoil";

export const isLoginState = atom({
  key: "isLoginState",
  default: false,
});
