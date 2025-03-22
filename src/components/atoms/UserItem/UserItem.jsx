import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace";
import { cn } from "@/lib/utils";

const userItemVariants = cva(
  "flex item-center justify-start font-normal px-[20px] mt-2 text-sm h-7",
  {
    variants: {
      variant: {
        default: "text-[#f9edffcc]",
        active: "text-[#481350] bg-white/90 bg-white/80",
      },
    },
  }
);
export const UserItem = ({ variant = "default", id, image, label }) => {
  const { workspace } = useCurrentWorkspace();
  return (
    <Button
      variant="transparent"
      size="sm"
      className={cn(userItemVariants({ variant }))}
      asChild
    >
      <Link to={`workspace/${workspace?._id}/members/${id}`}>
        <Avatar>
          <AvatarImage src={image} className="rounded-md " />
          <AvatarFallback className="rounded-md bg-sky-500 text-white">
            {label?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm truncate">{label}</span>
      </Link>
    </Button>
  );
};
