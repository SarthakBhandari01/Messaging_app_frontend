import { InfoIcon, LucideLoader2, SearchIcon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import { useAuth } from "@/hooks/context/useAuth";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace";

export const WorkspaceNavbar = () => {
  const { workspaceId } = useParams();
  const { isFetching, workspace, isSuccess, error } =
    useGetWorkspaceById(workspaceId);
  const { setCurrentWorkspace } = useCurrentWorkspace();
  const navigate = useNavigate();
  const { logout } = useAuth();
  useEffect(() => {
    if (!isSuccess && !isFetching && error) {
      if (error.status === 403) {
        logout();
        navigate("/auth/signin");
      }
    }
    if (workspace) {
      setCurrentWorkspace(workspace);
    }
  }, [
    workspace,
    setCurrentWorkspace,
    isSuccess,
    error,
    isFetching,
    navigate,
    logout,
  ]);

  if (isFetching) {
    return <LucideLoader2 className="animate-spin ml-2" />;
  }

  return (
    <nav className="flex items-center  justify-center h-10 p-1.5 bg-slack-dark ">
      <div className="flex-1" />
      <div className="flex-1">
        <Button
          size="sm"
          className="bg-accent/25 hover:bg-accent/15 w-full h-7 px-2"
        >
          <SearchIcon className="size-5 text-white mr-2" />
          <span>Search {workspace?.name || "workspace"}</span>
        </Button>
      </div>
      <div className="ml-auto flex flex-1 items-center justify-end">
        <Button variant="transparent" size="icon">
          <InfoIcon className="size-5 text-white" />
        </Button>
      </div>
    </nav>
  );
};
