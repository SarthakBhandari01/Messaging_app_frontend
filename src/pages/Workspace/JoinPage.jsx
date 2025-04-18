import { Link, useNavigate, useParams } from "react-router-dom";
import VerificationInput from "react-verification-input";

import { Button } from "@/components/ui/button";
import { useJoinWorkspace } from "@/hooks/apis/workspaces/useJoinWorkspace";
import { useToast } from "@/hooks/use-toast";

export const JoinPage = () => {
  const { workspaceId } = useParams();
  const { joinWorkspaceMutation } = useJoinWorkspace(workspaceId);
  const { toast } = useToast();
  const navigate = useNavigate();

  async function handleAddMemberToWorkspace(joinCode) {
    try {
      await joinWorkspaceMutation(joinCode);
      toast({
        title: "You have been added to workspace successfully",
        type: "Success",
      });
      navigate(`/workspaces/${workspaceId}`);
    } catch (error) {
      console.log("Error in adding member to workspace", error);
    }
  }
  return (
    <div className="flex flex-col justify-center items-center gap-y-8 h-[100vh] bg-white rounded-lg shadow-sm">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <div className="flex flex-col gap-y-2 items-center">
          <h1 className="font-bold text-3xl">Join Workspace</h1>
          <p>Enter the code you received to join the workspace</p>
        </div>
        <VerificationInput
          onComplete={handleAddMemberToWorkspace}
          length={6}
          classNames={{
            container: "flex gap-x-2",
            character:
              "h-auto rounded-md  border  border-gray-300 flex flex items-center justify-center text-lg font-medium focus:outline-none focus:border-blue-500",
            characterInactive: "bg-muted",
            characterSelected: "bg-white text-black",
            characterFilled: "bg-white text-black",
          }}
          autoFocus
        />
      </div>
      <div className="flex gap-x-4">
        <Button size="lg" variant="outline">
          <Link to={`/workspaces/${workspaceId}`}>Back to the workspace</Link>
        </Button>
      </div>
    </div>
  );
};
