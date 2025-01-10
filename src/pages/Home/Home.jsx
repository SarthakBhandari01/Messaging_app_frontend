import { useEffect } from "react";

import { UserButton } from "@/components/atoms/UserButton/UserButton";
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";

export const Home = () => {
  const { workspaces, isFetching } = useFetchWorkspace();

  useEffect(() => {
    if (isFetching) return;

    console.log("workspaces downloaded is", workspaces);

    if (workspaces.length === 0 || workspaces) {
      console.log("No workspaces found, creating one");
    }
  }, [isFetching, workspaces]);
  return (
    <>
      <h1 className="font-bold text-4xl">home</h1>
      <UserButton />
    </>
  );
};
