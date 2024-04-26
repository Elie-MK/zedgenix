import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuSquareIcon } from "lucide-react";
import NavBarItem from "./navBarItem";

function MobileNavBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuSquareIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
           <NavBarItem />
          </SheetDescription>
        </SheetHeader>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavBar;
