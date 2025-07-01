"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useMode } from "@/providers/ModeProvider";
import { Moon, Sun } from "lucide-react";

export function SiteHeader() {
  const { activeTheme, handleThemeChange } = useMode();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Estimates vs Actuals</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button
            title="Theme"
            variant="outline"
            size="icon"
            onClick={() =>
              handleThemeChange(activeTheme === "dark" ? "light" : "dark")
            }
          >
            {activeTheme === "dark" ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
