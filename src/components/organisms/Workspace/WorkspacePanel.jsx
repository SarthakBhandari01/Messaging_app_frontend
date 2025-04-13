import {
  AlertTriangleIcon,
  HashIcon,
  Loader,
  MessageSquareTextIcon,
  SendHorizonalIcon,
} from "lucide-react";
import { useParams } from "react-router-dom";

import { SideBarItem } from "@/components/atoms/SideBarItem/SideBarItem";
import { UserItem } from "@/components/atoms/UserItem/userItem";
import { WorkspacePannelHeader } from "@/components/molecules/Workspace/WorkspacePanelHeader";
import { WorkspacePanelSection } from "@/components/molecules/Workspace/WorkspacePanelSection";
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal";

export const WorkspacePanel = () => {
  const { workspaceId } = useParams();
  const { workspace, isFetching, isSuccess } = useGetWorkspaceById(workspaceId);
  const { setOpenCreateChannelModal } = useCreateChannelModal();
  if (isFetching) {
    return (
      <div className="flex flex-col gap-y-2 h-full items-center justify-center text-white">
        <Loader className="animate-spin size-6 text-white" />
      </div>
    );
  }

  if (!isSuccess) {
    return (
      <div className="flex flex-col gap-y-2 h-full items-center justify-center text-white">
        <AlertTriangleIcon className="size-6 text-white" /> something went wrong
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full  ">
      <WorkspacePannelHeader workspace={workspace} />
      <div className="flex flex-col px-2 mt-3">
        <SideBarItem
          label={"Thread"}
          channelId={"thread"}
          variant="default"
          icon={MessageSquareTextIcon}
        />
        <SideBarItem
          label="Draft and Sends"
          icon={SendHorizonalIcon}
          channelId="drafts"
          variant="default"
        />

        <WorkspacePanelSection
          label={"Channels"}
          onIconClick={() => {
            setOpenCreateChannelModal(true);
          }}
        >
          {workspace?.channels.map((channel) => {
            return (
              <SideBarItem
                key={channel._id}
                label={channel.name}
                channelId={channel._id}
                icon={HashIcon}
              />
            );
          })}
        </WorkspacePanelSection>
        <WorkspacePanelSection label={"Direct messages"} onIconClick={() => {}}>
          {workspace?.members?.map((member) => {
            return (
              <UserItem
                image={member?.memberId?.avatar}
                label={member?.memberId?.username}
                key={member?.memberId?._id}
                id={member?._id}
              />
            );
          })}
        </WorkspacePanelSection>
      </div>
    </div>
  );
};
