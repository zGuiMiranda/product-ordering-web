"use client";
import * as React from "react";
import { cn } from "../../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavBarProps } from "../../../../constants/interfaces";

const NavBar = ({ menus }: NavBarProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu, index) => (
          <NavigationMenuItem key={index} style={{ backgroundColor: "black" }}>
            <NavigationMenuTrigger
              key={index}
              style={{ backgroundColor: "black", color: "whitesmoke" }}
            >
              {menu.title}
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {menu.subMenus.map((subMenu) => (
                    <ListItem
                      key={subMenu.title}
                      title={subMenu.title}
                      href={subMenu.href}
                    >
                      {subMenu.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "AAAAA";
export default NavBar;
