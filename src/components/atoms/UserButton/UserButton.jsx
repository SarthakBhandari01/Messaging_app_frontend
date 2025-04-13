import { LogOutIcon, PencilIcon, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/context/useAuth";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";
import { useToast } from "@/hooks/use-toast";

export const UserButton = () => {
  const { auth, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();

  function openCreateWorkspaceModal() {
    setOpenCreateWorkspaceModal(true);
  }

  async function handleLogout() {
    await logout();
    toast({
      title: "Successfully signed out",
      type: "success",
    });
    navigate("/auth/signin");
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-10 hover:opacity-70  transition">
          <AvatarImage src={auth?.user?.avatar} />
          <AvatarFallback>{auth?.user?.username[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={openCreateWorkspaceModal}>
          <PencilIcon className="size-4 mr-2 h-10" />
          Create Workspace
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="size-4 mr-2 h-10" />
          setting
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon className="size-4 mr-2 h-10" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
