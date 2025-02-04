import { useQueryClient } from "@tanstack/react-query";
import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeleteWorkspace } from "@/hooks/apis/workspaces/useDeleteWorkspace";
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal";
import { useToast } from "@/hooks/use-toast";

export const WorkspacePreferencesModal = () => {
  const { openPreferences, setOpenPreferences, initialValue, workspace } =
    useWorkspacePreferencesModal();

  const [workspaceId, setWorkspaceId] = useState(null);

  const { toast } = useToast();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  useEffect(() => {
    setWorkspaceId(workspace?._id);
  }, [workspace]);

  function handleClose() {
    setOpenPreferences(false);
  }

  const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);

  async function handleDelete() {
    try {
      await deleteWorkspaceMutation();
      setOpenPreferences(false);  
      queryClient.invalidateQueries("fetchWorkspaces");
      navigate("/home");
      toast({
        title: "Workspace deleted successfully",
        type: "Success",
      });
    } catch (error) {
      console.log("Error in deleting Workspace ", error);
      toast({
        title: "Error in deleting workspace",
        type: "error",
      });
    }
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
          <button
            className="flex items-center gap-x-2 px-5 py-5 rounded-lg border cursor-pointer hover:bg-gray-50"
            onClick={handleDelete}
          >
            <TrashIcon className="size-5" />
            <p className="font-semibold text-sm">Delete Workspace</p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
