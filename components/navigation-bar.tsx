"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SignOutButton } from "./sign-out-button";
import { MenuIcon } from "lucide-react";

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <MenuIcon />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col items-center px-3">
            <NavigationMenuLink href="/" className="pt-3">
              Home
            </NavigationMenuLink>
            <div className="py-3">
              <SignOutButton />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
