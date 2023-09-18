"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import React, { useState } from "react";

export default function WebNavigatorTailwind({ options, styles }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">AdMedia</p>
        </NavbarBrand>
      </NavbarContent>

      {/* DESKTOP */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {options.map(({ tag, route }) => {
          return (
            <NavbarItem key={tag}>
              <Link color="foreground" href={route}>
                {tag}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* MOBILE */}
      <NavbarMenu>
        {options.map(({ tag, route }) => (
          <NavbarMenuItem key={tag}>
            <Link className="w-full" href={route}>
              {tag}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
