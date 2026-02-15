import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Menu, Search, Github } from "lucide-react"
import LogoBadge from "@/components/logo-badge"

export function Navbar() {
  return (
    <nav className="w-full border-b bg-background px-6 py-4">
      <div className="flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-64 sm:w-80 p-6">
                <div className="flex flex-col gap-4 mt-6">
                  <Button variant="ghost" className="justify-start">Docs</Button>
                  <Button variant="ghost" className="justify-start">Components</Button>
                  <Button variant="ghost" className="justify-start">Blocks</Button>
                  <Button variant="ghost" className="justify-start">Charts</Button>
                  <Button variant="ghost" className="justify-start">Directory</Button>
                  <Button variant="ghost" className="justify-start">Create</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">

                <NavigationMenuItem>
                  <NavigationMenuLink>
                    <LogoBadge />
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="font-semibold">
                    Docs
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="font-semibold">
                    Components
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="font-semibold">
                    Blocks
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="font-semibold">
                    Charts
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="font-semibold">
                    Directory
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="font-semibold">
                    Create
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <div className="relative w-64 hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search documentation..."
              className="pl-9"
            />
          </div>

          {/* GitHub */}
          <Button
            variant="secondary"
            className="flex items-center gap-2 bg-black text-white hover:bg-black/80"
          >
            <Github className="h-4 w-4" />
            <span className="font-semibold">107k</span>
          </Button>

          {/* New Project */}
          <Button>+ New Project</Button>

        </div>

      </div>
    </nav>
  )
}