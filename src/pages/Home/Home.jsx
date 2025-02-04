import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserButton } from "@/components/atoms/UserButton/UserButton";
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";

export const Home = () => {
  const { workspaces, isFetching } = useFetchWorkspace();
  const navigate = useNavigate();
  const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();

  useEffect(() => {
    if (isFetching) return;

    console.log("workspaces downloaded is", workspaces);

    if (workspaces.length === 0 || !workspaces) {
      console.log("No workspaces found, creating one");
      setOpenCreateWorkspaceModal(true);
    } else {
      navigate(`/workspaces/${workspaces[0]._id}`);
    }
  }, [isFetching, workspaces, navigate, setOpenCreateWorkspaceModal]);
  return (
    <>
      <h1 className="font-bold text-4xl">home</h1>
      <UserButton />
    </>
  );
};
