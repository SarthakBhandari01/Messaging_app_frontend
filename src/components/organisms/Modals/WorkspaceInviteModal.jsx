import { CopyIcon, RefreshCcwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export const WorkspaceInviteModal = ({
  openInviteModal,
  joinCode,
  workspaceName,
  setOpenInviteModal,
}) => {
  const { toast } = useToast();
  async function handleCopy() {
    const textToCopy = joinCode;
    await navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Link copied to clipboard",
      type: "success",
    });
  }
  function handleResetCode() {}
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
