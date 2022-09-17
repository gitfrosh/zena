import { atom } from "recoil";

export const textState = atom({
  key: "textState",
  default: "",
});

export const userState = atom({
  key: "userState",
  default: {
    name: "Blue",
    nft: 0,
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
});

export const walletOpenState = atom({
  key: "walletOpen",
  default: false,
});

export const avatarNumber = atom({
  key: "avatarNumber",
  default: 0,
});

export const mintState = atom({
  key: "mintState",
  default: false,
});

// example on how to use in component:
// const [text, setText] = useRecoilState(textState);
