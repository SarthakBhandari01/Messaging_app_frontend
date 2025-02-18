import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export const WorkspacePanelSection = ({ children, label, onIconClick }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col mt-3 px-2">
      <div className="flex items-center px-3.5  ">
        <Button
          onClick={() => setOpen(!open)}
          variant="transparent"
          className="size-6 text-sm p-0.5 text-[#f9edffcc]"
        >
          {open ? (
            <FaCaretRight className="size-4" />
          ) : (
            <FaCaretDown className="size-4" />
          )}
        </Button>
        <Button
          size="sm"
          variant="transparent"
          className="text-sm text-[#f9edffcc] h-[30px] px-.15  overflow-hidden flex justify-start items-center"
        >
          <span>{label}</span>
        </Button>
        {onIconClick && (
          <Button
          onClick={onIconClick}
            variant="primary"
            size="sm"
            className="text-[#f9edffcc] ml-auto  p-0.5  hover:bg-slack-dark transaction opacity"
          >
            <PlusIcon className="size-4  text-[#f9edffcc]" />
          </Button>
        )}
      </div>
      {open && children}
    </div>
  );
};
