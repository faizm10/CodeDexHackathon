"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Predictor", href: "/predictor" },
    { label: "Graphs", href: "/graphs" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white" isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden custom-toggle"
        />
        <NavbarBrand>
          {/* <p className="font-bold text-black">Faiz Mustansar</p> */}
          <img
            alt="logo"
            className="h-16 sm:justify-end"
            src="https://1000logos.net/wp-content/uploads/2021/03/Olympics-logo.png"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="end">
        <NavbarItem>
          <Link href="/" className=" text-black">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/predictor" className=" text-black">
            Predictor
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/graphs" className=" text-black">
            Graphs
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
