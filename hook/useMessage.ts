import { useSetRecoilState, useResetRecoilState, useRecoilValue } from "recoil";
import { messageRenderer } from "../state/modal";

interface MessageProps {
  visible?: boolean;
  message: string;
  duration?: number;
}

export const useMessage = () => {
  const setMessageRender = useSetRecoilState(messageRenderer);
  const resetMessageRender = useResetRecoilState(messageRenderer);
  const isMessageRender = useRecoilValue(messageRenderer);

  return (newValue: MessageProps) => {
    if (isMessageRender.visible) return;

    setMessageRender({ visible: true, message: newValue.message });
    setTimeout(() => resetMessageRender(), newValue.duration ? newValue.duration : 2000);
  };
};
