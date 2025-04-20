import { MessageRenderer } from "@/components/atoms/MessageRenderer/MessageRenderer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const Message = ({ authorImage, authorName, createdAt, body }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <Button>
          <Avatar>
            <AvatarImage className="rounded-md" src={authorImage} />
            <AvatarFallback className="rounded-md bg-sky-400 text-white  text-sm">
              {authorName?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
        <div className="flex flex-col overflow-hidden">
          <div className="text-sm">
            <button className="font-bold text-primary hover:underline">
              {authorName}
            </button>
            <span>&nbsp;&nbsp;</span>
            <button className="text-muted-foreground hover:underline">
              {createdAt}
            </button>
          </div>
          <MessageRenderer value={body} />
        </div>
      </div>
    </div>
  );
};
