import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const componentsList = [
  "Accordion", "Alert", "Alert Dialog",
  "Aspect Ratio", "Avatar", "Badge",
  "Breadcrumb", "Button", "Button Group",
  "Calendar", "Card", "Carousel",
  "Chart", "Checkbox", "Collapsible",
  "Combobox", "Command", "Context Menu",
  "Data Table", "Date Picker", "Dialog",
  "Direction", "Drawer", "Dropdown Menu",
  "Empty", "Field", "Hover Card",
  "Input", "Input Group", "Input OTP",
  "Item", "Kbd", "Label"
]

export default function ComponentsPage() {
  return (
    <div className="flex w-full">

      {/* LEFT SIDEBAR */}
      <aside className="hidden lg:block w-64 border-r px-6 py-10 text-sm">
        <div className="space-y-6">

          <div>
            <p className="text-muted-foreground mb-3">Sections</p>
            <div className="space-y-2">
              <p className="cursor-pointer hover:text-foreground">Introduction</p>
              <p className="bg-muted rounded-md px-3 py-2 font-medium">
                Components
              </p>
              <p className="cursor-pointer hover:text-foreground">Installation</p>
              <p className="cursor-pointer hover:text-foreground">Directory</p>
              <p className="cursor-pointer hover:text-foreground">RTL</p>
              <p className="cursor-pointer hover:text-foreground">MCP Server</p>
              <p className="cursor-pointer hover:text-foreground">Registry</p>
              <p className="cursor-pointer hover:text-foreground">Forms</p>
              <p className="cursor-pointer hover:text-foreground">Changelog</p>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground mb-3">Components</p>
            <div className="space-y-2">
              <p className="cursor-pointer hover:text-foreground">Accordion</p>
              <p className="cursor-pointer hover:text-foreground">Alert</p>
              <p className="text-muted-foreground">Alert Dialog</p>
              <p className="text-muted-foreground">Aspect Ratio</p>
            </div>
          </div>

        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-4xl mx-auto px-8 py-12">

        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Components</h1>
          <p className="text-muted-foreground text-lg">
            Here you can find all the components available in the library.
            We are working on adding more components.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-16 text-base">
          {componentsList.map((item) => (
            <p
              key={item}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              {item}
            </p>
          ))}
        </div>

      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden xl:block w-80 border-l px-8 py-12 text-sm">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold text-lg">
              Deploy your shadcn/ui app on Vercel
            </h3>

            <p className="text-muted-foreground">
              Trusted by OpenAI, Sonos, Adobe, and more.
              Vercel provides tools and infrastructure
              to deploy apps and features at scale.
            </p>

            <Button className="w-full">
              Deploy Now
            </Button>
          </CardContent>
        </Card>
      </aside>

    </div>
  )
}