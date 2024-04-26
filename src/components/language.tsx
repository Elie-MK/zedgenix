import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Button } from "@/components/ui/button";
  import { GlobeIcon } from "lucide-react";
import { useState } from "react";
  
function Language() {
  const [lang, setLang] = useState<"Fr" | "En">("Fr");
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <span className="mr-1" >{lang}</span>
            <GlobeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setLang("Fr")}>
            Français
          </DropdownMenuItem>
          <DropdownMenuItem onClick={()=> setLang('En')}>
            Anglais
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
}

export default Language;