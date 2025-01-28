import { TrashIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal";

export const WorkspacePreferencesModal = () => {
  const { openPreferences, setOpenPreferences, initialValue } =
    useWorkspacePreferencesModal();

  function handleClose() {
    setOpenPreferences(!openPreferences);
  }

  return (
    <Dialog open={openPreferences} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialValue}</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-4 flex flex-col gap-y-2 ">
          <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
            <div className="flex items-center justify-between ">
              <p className="font-semibold text-sm">Workspace Name</p>
              <p className="font-semibold text-sm hover:underline">Edit</p>
            </div>
            <p className="text-sm">{initialValue}</p>
          </div>
          <button className="flex items-center gap-x-2 px-5 py-5 rounded-lg border cursor-pointer hover:bg-gray-50">
            <TrashIcon className="size-5" />
            <p className="font-semibold text-sm">Delete Workspace</p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
