import Quill from "quill";
import { useEffect, useRef, useState } from "react";

export const MessageRenderer = ({ value }) => {
  const rendererRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const container = rendererRef.current;
    const quill = new Quill(document.createElement("div"), {
      theme: "snow",
    });
    quill.disable();
    const content = JSON.parse(value);
    quill.setContents(content);
    setIsEmpty(quill.getText().trim().length === "");
    container.innerHTML = quill.root.innerHTML;
  }, [value]);
  if (isEmpty) return null;

  return <div ref={rendererRef} />;
};
