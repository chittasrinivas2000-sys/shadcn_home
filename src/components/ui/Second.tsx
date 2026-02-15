import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Search, Plus, ArrowUp, Check } from "lucide-react"

const Second = () => {
  const [message, setMessage] = useState("")
  const usage = 52

  return (
    <div className="h-full w-full">
      <Card className="h-full flex flex-col rounded-2xl shadow-sm overflow-hidden">
        <CardContent className="flex-1 space-y-6 p-6">

          {/* TEAM CARD */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex -space-x-3">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/40?img=1" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/40?img=2" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="bg-black text-white">
                <AvatarFallback>🐰</AvatarFallback>
              </Avatar>
            </div>

            <h3 className="text-lg font-semibold">No Team Members</h3>
            <p className="text-muted-foreground text-sm">
              Invite your team to collaborate on this project.
            </p>

            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Invite Members
            </Button>
          </div>

          {/* STATUS BADGES */}
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Syncing</Badge>
            <Badge variant="outline">Updating</Badge>
            <Badge variant="outline">Loading</Badge>
          </div>

          {/* MESSAGE INPUT */}
          <div className="flex items-center gap-2 border rounded-full px-3 py-2">
            <Plus className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Send a message..."
              className="border-0 focus-visible:ring-0 shadow-none"
            />
          </div>

          {/* PRICE RANGE */}
          <div className="space-y-3">
            <h4 className="font-semibold">Price Range</h4>
            <p className="text-sm text-muted-foreground">
              Set your budget range (500rs - 1000rs).
            </p>
            <Slider defaultValue={[500]} max={1000} step={50} />
          </div>

          {/* SEARCH FIELD */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-9" />
          </div>

          {/* URL INPUT */}
          <Input placeholder="https://example.com" />

          {/* NEW CHAT INPUT BLOCK (From Screenshot) */}
          <div className="space-y-4">

            {/* Main Rounded Chat Box */}
            <div className="border rounded-2xl p-4 space-y-4 bg-muted/30">

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask, Search or Chat..."
                className="w-full resize-none bg-transparent outline-none text-base placeholder:text-muted-foreground"
                rows={2}
              />

              <div className="flex items-center justify-between flex-wrap gap-3">

                {/* Left */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full h-8 w-8"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <span>Auto</span>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {usage}% used
                  </span>

                  <Button
                    size="icon"
                    className="rounded-full h-8 w-8 bg-black text-white hover:bg-black/90"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                </div>

              </div>
            </div>

            {/* Tag Row */}
            <div className="flex items-center justify-between border rounded-xl px-4 py-2 bg-muted/20">
              <span className="text-sm text-muted-foreground">
                @shadcn
              </span>

              <div className="h-6 w-6 flex items-center justify-center rounded-full bg-black text-white">
                <Check className="h-3 w-3" />
              </div>
            </div>

          </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default Second