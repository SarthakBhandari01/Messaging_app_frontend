import { useQueryClient } from "@tanstack/react-query";
import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDeleteWorkspace } from "@/hooks/apis/workspaces/useDeleteWorkspace";
import { useUpdateWorkspace } from "@/hooks/apis/workspaces/useUpdateWorkspace";
import { useConfirm } from "@/hooks/context/useConfirm";
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal";
import { useToast } from "@/hooks/use-toast";

export const WorkspacePreferencesModal = () => {
  const { openPreferences, setOpenPreferences, initialValue, workspace } =
    useWorkspacePreferencesModal();

  const [workspaceId, setWorkspaceId] = useState(null);

  const { toast } = useToast();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const [renameValue, setRenameValue] = useState(workspace?.name);

  const [editOpen, setEditOpen] = useState(false);

  const { isPending, updateWorkspaceMutation } =
    useUpdateWorkspace(workspaceId);

  const { confirmation, ConfirmDialog } = useConfirm({
    title: "Do you want to delete the workspace?",
    message: "This action cannot be undone.",
  });

  const { confirmation: updateConfirmation, ConfirmDialog: UpdateDialog } =
    useConfirm({
      title: "Do you want to update the workspace?",
      message: "This action cannot be undone.",
    });

  useEffect(() => {
    setWorkspaceId(workspace?._id);
    setRenameValue(workspace?.name);
  }, [workspace]);

  function handleClose() {
    setOpenPreferences(false);
  }

  const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);

  async function handleDelete() {
    try {
      const ok = await confirmation();
      if (!ok) {
        return;
      }
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

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const ok = await updateConfirmation();
      if (!ok) {
        return;
      }
      await updateWorkspaceMutation(renameValue);
      queryClient.invalidateQueries(`fetchWorkspaceById-${workspaceId}`);
      setOpenPreferences(false);
      toast({
        title: "Workspace updated successfully",
        type: "success",
      });
    } catch (error) {
      console.log("Error in updating workspace ", error);
      toast({
        title: "Error in updating workspace",
        type: "error",
      });
    }
  }
  return (
    <>
      <ConfirmDialog />
      <UpdateDialog />
      <Dialog open={openPreferences} onOpenChange={handleClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{initialValue}</DialogTitle>
          </DialogHeader>
          <div className="px-4 pb-4 flex flex-col gap-y-2 ">
            <Dialog open={editOpen} onOpenChange={setEditOpen}>
              <DialogTrigger>
                <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-between ">
                    <p className="font-semibold text-sm">Workspace Name</p>
                    <p className="font-semibold text-sm hover:underline">
                      Edit
                    </p>
                  </div>
                  <p className="text-sm">{initialValue}</p>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Rename Workspace</DialogTitle>
                </DialogHeader>
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <Input
                    required
                    autofocus
                    value={renameValue}
                    onChange={(e) => setRenameValue(e.target.value)}
                    minLenght={3}
                    maxLength={50}
                    placeholder="Workspace Name e.g Design Team"
                    disabled={isPending}
                  />
                  <DialogFooter className="flex gap-3">
                    <DialogClose>
                      <Button
                        variant="outline"
                        className="font-semibold"
                        disabled={isPending}
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit" disabled={isPending}>
                      Save
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
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
    </>
  );
};
