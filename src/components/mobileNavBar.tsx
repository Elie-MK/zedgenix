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
import { Menu, MenuSquareIcon } from "lucide-react";
import NavBarItem from "./navBarItem";

function MobileNavBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuSquareIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
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
