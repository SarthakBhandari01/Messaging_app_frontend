import {
  BellIcon,
  HomeIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { UserButton } from "@/components/atoms/UserButton/UserButton";
import { SidebarButton } from "@/components/molecules/SidebarButton/SidebarButton";

import { WorkspaceSwitcher } from "./WorkspaceSwitcher";

export const WorkspaceSidebar = () => {
  return (
    <aside className=" w-[80px] bg-slack-dark h-full flex flex-col gap-y-4 items-center pt-[10px] pb-[6px]">
      <WorkspaceSwitcher />
      <SidebarButton Icon={HomeIcon} label={"Home"} />
      <SidebarButton Icon={MessageSquareIcon} label={"Message"} />
      <SidebarButton Icon={BellIcon} label={"Notifications"} />
      <SidebarButton Icon={MoreHorizontalIcon} label={"More"} />
      <div className="flex flex-col items-center justify-center mt-auto mb-5 gap-y-1">
        <UserButton />
      </div>
    </aside>
  );
};
