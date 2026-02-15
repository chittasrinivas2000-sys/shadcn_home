import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { ArrowUp, Globe, Paperclip, MoreHorizontal } from "lucide-react"

const Fourth = () => {
  const [selected, setSelected] = useState("Social Media")

  const options = ["Social Media", "Search Engine", "Referral", "Other"]

  return (
    <div className="h-full w-full">
      <Card className="h-full flex flex-col rounded-2xl shadow-sm overflow-hidden">
        <CardContent className="flex-1 space-y-6 p-6">

          {/* Context Input */}
          <div className="space-y-4">
            <Input placeholder="Ask, search, or make anything..." />

            <div className="flex items-center justify-between text-sm text-muted-foreground flex-wrap gap-2">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-2">
                  <Paperclip className="h-4 w-4" /> Auto
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> All Sources
                </span>
              </div>

              <Button size="icon" className="rounded-full">
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline">Archive</Button>
            <Button variant="outline">Report</Button>
            <Button variant="outline">Snooze</Button>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-3 border rounded-xl p-4">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm font-medium">
              I agree to the terms and conditions
            </label>
          </div>

          {/* Pagination + Copilot (Fully Responsive) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex gap-1 flex-wrap">
              <Button variant="outline" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="icon">←</Button>
              <Button variant="outline" size="icon">→</Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Copilot
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>

          {/* Survey Section */}
          <div className="space-y-4 border rounded-2xl p-6">
            <div>
              <h3 className="font-semibold text-lg">
                How did you hear about us?
              </h3>
              <p className="text-sm text-muted-foreground">
                Select the option that best describes how...
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {options.map((option) => (
                <Button
                  key={option}
                  variant={selected === option ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setSelected(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Loading State */}
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground text-center">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-muted border-t-foreground"></div>
            <span>Processing your request</span>
            <p>
              Please wait while we process your request. Do not refresh the page.
            </p>
            <Button>Cancel</Button>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default Fourth