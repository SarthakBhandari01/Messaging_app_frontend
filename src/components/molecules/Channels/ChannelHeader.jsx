import { FaChevronDown } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const ChannelHeader = ({ name }) => {
  async function handleFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="bg-white border-b h-[50px] flex items-center px-4 overflow-hidden">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="text-lg font-semibold px-2 w-auto overflow-hidden text-ellipsis whitespace-nowrap"
          >
            <span># {name}</span>
            <FaChevronDown className="size-5 text-muted-foreground" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle># {name}</DialogTitle>
          </DialogHeader>
          <div className="px-4 pb-5 flex flex-col gap-y-2">
            <Dialog>
              <DialogTrigger>
                <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-100">
                  <div className="flex justify-between item center">
                    <div className="flex flex-col items-start gap-y-1">
                      <p className="font-semibold text-sm">Channel Name</p>
                      <p className="text-sm"># {name}</p>
                    </div>
                    <p className="font-semibold text-sm hover:underline">
                      Edit
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Rename Channel</DialogTitle>
                </DialogHeader>
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    required
                    autoFocus
                    minLength={3}
                    maxLength={50}
                    placeholder="Channel Name e.g Design Team"
                    className="w-full px-3 py-2 border rounded-md"
                    disabled={false}
                  />
                  <DialogFooter className="">
                    <DialogClose>
                      <Button variant="outline" className="font-semibold">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
