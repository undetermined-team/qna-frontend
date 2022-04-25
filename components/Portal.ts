import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil";
import Message from "../components/molecules/Message";
import { messageRenderer } from "../state/modal";

const Portal = ({}) => {
  const isMessageRender = useRecoilValue(messageRenderer);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const message = Message({ message: isMessageRender.message });

  return mounted
    ? createPortal(isMessageRender.visible && message, document.getElementById("message"))
    : null;
};

export default Portal;
