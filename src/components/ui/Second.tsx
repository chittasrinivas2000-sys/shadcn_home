
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Search, Plus, ArrowUp, Info } from "lucide-react"
const Second=()=>{
    return(
        <div className="ml-3">
             <div className="max-w-md mx-auto space-y-6 p-4">

      {/* TEAM CARD */}
      <Card className="rounded-2xl">
        <CardContent className="flex flex-col items-center text-center space-y-4 py-8">
          
          {/* Avatar Group */}
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

          <Button className="mt-2">
            <Plus className="mr-2 h-4 w-4" />
            Invite Members
          </Button>
        </CardContent>
      </Card>

      {/* STATUS BADGES */}
      <div className="flex gap-2">
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
        <Input
          placeholder="Search..."
          className="pl-9 pr-20"
        />
      </div>

      {/* URL INPUT */}
      <div className="relative">
        <Input placeholder="https://example.com" />
        
      </div>

      {/* CHAT FOOTER */}
      <div className="flex items-center justify-between border rounded-full px-4 py-2">
        <div className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          <span className="text-sm">Auto</span>
        </div>

        <span className="text-sm text-muted-foreground">
          100% used
        </span>

        <Button size="icon" className="rounded-full">
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>

    </div>
        </div>
    )
}
export default Second