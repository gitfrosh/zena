import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const textState = atom({
  key: "textState",
  default: "",
});

export const userState = atom({
  key: "userState",
  default: {},
});

export const walletOpen = atom({
  key: "walletOpen",
  default: false,
});

// example on how to use in component:
// const [text, setText] = useRecoilState(textState);
