import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenu as ShadDropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";

type DropDownMenuProps = {
  menuLabel: string;
  menuItems: { label: string; onClick: () => void }[];
};

export const DropdownMenu = ({
  menuLabel = "",
  menuItems = [],
}: DropDownMenuProps) => {
  return (
    <ShadDropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((menuItem, idx) => (
          <DropdownMenuItem key={idx} onClick={menuItem.onClick}>
            {menuItem.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </ShadDropdownMenu>
  );
};
