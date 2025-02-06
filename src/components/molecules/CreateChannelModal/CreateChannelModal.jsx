import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal";

export const CreateChannelModal = () => {
  const { openCreateChannelModal, setOpenCreateChannelModal } =
    useCreateChannelModal();
  const [channelName, setChannelName] = useState("");

  function handleClose() {
    setOpenCreateChannelModal(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <Dialog open={openCreateChannelModal} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a channel</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleFormSubmit}>
          <Input
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            placeHolder="Channel Name e.g. team-announcements"
            minLength={3}
            required
          />
          <div className="flex justify-end mt-5">
            <Button>Create Channel</Button>
          </div>
        </form> 
      </DialogContent>
    </Dialog>
  );
};
