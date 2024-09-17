import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Bar() {
  return (
    
      <div
        className="flex items-center justify-between
      rounded-lg mt-2 dark:bg-neutral-900
      text-black dark:text-white
      p-4 bg-white border drop-shadow-lg"
      >
        <div className="text-2xl">Links</div>
        <div className="flex gap-4">
        <Input type="search" placeholder="search" className="hidden md:flex"/>
        <Button>Create Blink</Button>
        </div>
      </div>
  );
}
