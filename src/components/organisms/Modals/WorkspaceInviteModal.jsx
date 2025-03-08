import { CopyIcon, RefreshCcwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useResetJoinCode } from "@/hooks/apis/workspaces/useResetJoinCode";
import { useToast } from "@/hooks/use-toast";

export const WorkspaceInviteModal = ({
  openInviteModal,
  joinCode,
  workspaceName,
  setOpenInviteModal,
  workspaceId,
}) => {
  const { toast } = useToast();
  const { resetJoinCodeMutation } = useResetJoinCode(workspaceId);

  async function handleCopy() {
    const textToCopy = joinCode;
    await navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Link copied to clipboard",
      type: "success",
    });
  }

  async function handleResetCode() {
    try {
      await resetJoinCodeMutation();
      toast({
        type: "success",
        title: "Join code reset successfully",
      });
    } catch (error) {
      console.log("Error in resetting join code", error);
    }
  }

  return (
    <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite people to {workspaceName}</DialogTitle>
          <DialogDescription>
            Use the code shown below to invite people to your workspace.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center gap-y-4 py-8">
          <p className="font-bold text-4xl">{joinCode}</p>
          <Button size="sm" variant="ghost" onClick={handleCopy}>
            Copy Link
            <CopyIcon className="size-4 ml-2" />
          </Button>
          <a
            href={`/workspaces/join/${workspaceId}`}
            rel=""
            className="text-blue-500"
            target="_blank"
          >
            Redirect to the join page
          </a>
        </div>
        <div
          className="flex justify-center items-center"
          onClick={handleResetCode}
        >
          <Button size="sm" variant="outline">
            Reset Join Code
            <RefreshCcwIcon className="size-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
