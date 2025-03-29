import "quill/dist/quill.snow.css";

import Quill from "quill";
import { useEffect, useRef } from "react";

export const Editor = () => {
  const containerRef = useRef();
  const quillRef = useRef();
  const defaultValueRef = useRef();

  useEffect(() => {
    if (!containerRef) return;
    const container = containerRef.current;
    const editorContainer = container.appendChild(
      container.ownerDocument.createElement("div")
    );
    const option = {
      theme: "snow",
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          ["link", "image"],
          [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
          ["clean"],
        ],
        keyboard: {
          bindings: {
            enter: {
              key: "Enter",
              handler: () => {
                return;
              },
            },
            shift_enter: {
              key: "Enter",
              shiftKey: true,
              handler: () => {
                quill.insertText(quill.getSelection()?.index || 0, "\n");
              },
            },
          },
        },
      },
    };
    console.log("container ", container);
    console.log("Editor Container => ", editorContainer);
    const quill = new Quill(editorContainer, option);
    quillRef.current = quill;
    quillRef.current.focus();
    quill.setContents(defaultValueRef.current);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col border border-slate-500 rounded-md overflow-hidden  focus-within:shadow-sm focus-within:border-slate-400 bg-white">
        <div className="h-full" ref={containerRef} />
      </div>
      <p className="p-2 text-[10px] text-muted-foreground flex justify-end">
        <strong>Shift + return</strong> &nbsp; to add a new line
      </p>
    </div>
  );
};
