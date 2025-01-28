import { ChevronDownIcon, ListFilterIcon, SquarePenIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/context/useAuth";
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal";

export const WorkspacePannelHeader = ({ workspace }) => {
  console.log("workspace : ", workspace);

  const { setOpenPreferences, setInitialValue } =
    useWorkspacePreferencesModal();

  const workspaceMembers = workspace?.members;

  const { auth } = useAuth();
  const isLoggedInUserAdminOfWorkspace = workspaceMembers?.find(
    (member) => member.memberId === auth?.user?._id && member.role === "admin"
  );
  return (
    <div className="h-50px flex items-center justify-between px-4 gap-0.5">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            variant="transparent"
            className="font-semibold text-lg w-auto p-1.5 overflow-hidden"
          >
            <span className="truncate">{workspace?.name}</span>
            <ChevronDownIcon className="size-5 ml-1 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-64">
          <DropdownMenuItem>
            <div className="size-9 relative overflow-hidden text-white font-semibold text-xl rounded-md  flex justify-center items-center mr-2 bg-[#616061] ">
              {workspace?.name.charAt(0).toUpperCase()}
            </div>
            <div className="">
              <p className="font-bold">{workspace?.name}</p>
              <p className="text-muted-foreground text-xs">Active workspace</p>
            </div>
          </DropdownMenuItem>
          {isLoggedInUserAdminOfWorkspace && (
            <>
              <DropdownMenuItem
                className="cursor-pointer py-2"
                onClick={() => {
                  setInitialValue(workspace?.name);
                  setOpenPreferences(true);
                }}
              >
                Prefrences
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer py-2">
                Invite people to {workspace?.name}
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-1">
        <Button variant="transparent" size="iconsm">
          <ListFilterIcon className="size-5" />
        </Button>
        <Button variant="transparent" size="iconsm">
          <SquarePenIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
};
