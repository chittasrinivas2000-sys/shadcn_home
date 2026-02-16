import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function InstallationPage() {
  return (
    <div className="flex w-full">

      {/* LEFT SIDEBAR */}
      <aside className="hidden lg:block w-64 border-r px-6 py-10 text-sm">
        <div className="space-y-6">
          <div>
            <p className="text-muted-foreground mb-3">Sections</p>
            <div className="space-y-2">
              <p className="cursor-pointer hover:text-foreground">Introduction</p>
              <p className="cursor-pointer hover:text-foreground">Components</p>
              <p className="bg-muted rounded-md px-3 py-2 font-medium">
                Installation
              </p>
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
      <main className="flex-1 max-w-3xl mx-auto px-8 py-12 space-y-12">

        {/* Title */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Installation</h1>
          <p className="text-muted-foreground text-lg">
            How to install dependencies and structure your app.
          </p>
        </div>

        {/* Green Info Box */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-sm">
          <p>
            Starting a new project? Use{" "}
            <span className="underline font-medium">shadcn/create</span>{" "}
            to scaffold a complete app with custom themes, components, and
            presets. Works with Next.js, Vite, and TanStack Start.
          </p>
        </div>

        {/* Quick Start */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Quick Start</h2>

          <p>
            Run the following command to create a new project with shadcn/ui:
          </p>

          <Tabs defaultValue="pnpm" className="w-full">
            <TabsList>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="bun">bun</TabsTrigger>
            </TabsList>

            <TabsContent value="pnpm">
              <Card className="bg-muted">
                <CardContent className="p-4 font-mono text-sm">
                  pnpm dlx shadcn@latest create
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="npm">
              <Card className="bg-muted">
                <CardContent className="p-4 font-mono text-sm">
                  npx shadcn@latest create
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="yarn">
              <Card className="bg-muted">
                <CardContent className="p-4 font-mono text-sm">
                  yarn dlx shadcn@latest create
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bun">
              <Card className="bg-muted">
                <CardContent className="p-4 font-mono text-sm">
                  bunx shadcn@latest create
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <p className="text-muted-foreground">
            This will guide you through the process of creating a new project
            with shadcn/ui with your preferred framework, icon library, and
            theme.
          </p>
        </div>

        {/* Pick Your Framework */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Pick Your Framework
          </h2>

          <p className="text-muted-foreground">
            Start by selecting your framework of choice. Then follow the
            instructions to install the dependencies and structure your app.
            shadcn/ui is built to work with all React frameworks.
          </p>
        </div>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden xl:block w-80 border-l px-8 py-12 text-sm">
        <div className="space-y-8">
          <div>
            <p className="font-semibold mb-4">On This Page</p>
            <div className="space-y-2 text-muted-foreground">
              <p>Quick Start</p>
              <p>Pick Your Framework</p>
            </div>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">
                Deploy your shadcn/ui app on Vercel
              </h3>

              <p className="text-muted-foreground">
                Trusted by OpenAI, Sonos, Adobe, and more. Vercel provides
                tools and infrastructure to deploy apps and features at scale.
              </p>

              <Button className="w-full">Deploy Now</Button>
            </CardContent>
          </Card>
        </div>
      </aside>
    </div>
  )
}