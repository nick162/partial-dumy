import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { ToggleDarkMode } from "./ToggleDarkMode";

const Navbar = () => {
  return (
    <nav className="container m-auto p-4">
      <div className="flex items-center justify-between">
        <Image
          src="/logo.png"
          width={187}
          height={40}
          alt="logo"
          className="dark:bg-white"
        />
        <div className="hidden items-center gap-4 md:flex">
          <p>Home</p>
          <p>Portfolio</p>
          <p>About Me</p>
          <p>Testimonial</p>
          <ToggleDarkMode />
        </div>
        <Button
          variant="outline"
          className="border-purple hidden text-purple-500 md:block"
        >
          Contact Me
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden">
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>Portfolio</DropdownMenuItem>
            <DropdownMenuItem>About Me</DropdownMenuItem>
            <DropdownMenuItem>Testimonial</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
