
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import Payment from "./Payment"
import Second from "./Second"
import Third from "./Third"
import Fourth from "./Fourth"
const Content =()=>{
    return(
        <section >
            <div className="flex justify-between">
            <div className="flex ml-8" >
                <h1 className="mr-4 text-slate 700 font-semibold">Examples</h1>
                <h1 className="mr-4 text-slate-500 font-semibold">DashBoard</h1>
                <h1 className="mr-4 text-slate-500 font-semibold">Tasks</h1>
                <h1 className="mr-4 text-slate-500 font-semibold">PlayGround</h1>
                <h1 className="mr-4 text-slate-500 font-semibold">Authentication</h1>
                <h1 className="mr-4 text-slate-500 font-semibold">RTL</h1>
            </div>
            <div className="mr-8">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Neutral</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Blue</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Green</DropdownMenuItem>
                        <DropdownMenuItem>Orange</DropdownMenuItem>
                        <DropdownMenuItem>Red</DropdownMenuItem>
                        <DropdownMenuItem>Rose</DropdownMenuItem>
                        <DropdownMenuItem>Violet</DropdownMenuItem>
                        <DropdownMenuItem>yellow</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button
                     variant="ghost"
                     size="icon"
                    className="h-9 w-9 rounded-lg border ml-2"
                    >
                    <Copy className="h-4 w-4" />
                </Button>
            </div>
            </div>
                <div className="flex m-8" >
                    <Payment/>
                    <Second/>
                    <Third/>
                    <Fourth/>
                </div>
        </section>
    )
}
export default Content