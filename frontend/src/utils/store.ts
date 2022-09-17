import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const userState = atom({
  key: "userState", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

// example on how to use in component:
// const [text, setText] = useRecoilState(textState);
