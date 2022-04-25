import { atom, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

interface MessageProps {
  visible?: boolean;
  message: string;
  duration?: number;
}

export const messageRenderer = atom({
  key: "messageRenderer",
  default: {
    visible: false,
    message: "",
  },
});

export const useSetWithDelayedReset = () => {
  const setMessageRender = useSetRecoilState(messageRenderer);
  const resetMessageRender = useResetRecoilState(messageRenderer);
  const isMessageRender = useRecoilValue(messageRenderer);

  return (newValue: MessageProps) => {
    if (isMessageRender.visible) return;

    setMessageRender({ visible: true, message: newValue.message });
    setTimeout(() => resetMessageRender(), newValue.duration ? newValue.duration : 2000);
  };
};
