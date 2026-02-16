import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2 } from "lucide-react"

export default function NewProjectBtn() {
  const [environment, setEnvironment] = useState("kubernetes")
  const [gpus, setGpus] = useState(1)
  const [wallpaperTint, setWallpaperTint] = useState(false)

  return (
    <div className="flex flex-col md:flex-row h-screen bg-muted/40">

      {/* LEFT SIDEBAR: hidden on mobile */}
      <aside className="hidden md:block w-60 border-r bg-background p-4 flex-none overflow-y-auto h-screen">
        <h2 className="font-semibold mb-4">Blocks</h2>
        <div className="space-y-2 text-sm">
          <p className="font-medium">Home</p>
          <p className="text-muted-foreground">Elevenlabs</p>
          <p className="text-muted-foreground">GitHub</p>
          <p className="text-muted-foreground">Vercel</p>
          <p className="text-muted-foreground">ChatGPT</p>

          <h3 className="mt-6 font-semibold">Components</h3>
          {[
            "Accordion","Alert","Avatar","Badge","Button","Card","Carousel",
            "Chart","Checkbox","Collapsible","Combobox","Command",
            "Content Menu","Dialog","Drawer","Dropdown Menu"
          ].map((comp) => (
            <p key={comp} className="text-muted-foreground">{comp}</p>
          ))}
        </div>
      </aside>

      {/* MIDDLE SCROLLABLE CONTENT */}
      <main className="flex-1 p-4 md:p-6 overflow-auto h-screen">
        <div className="space-y-4">

          {/* FIRST ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* Observability Card */}
            <Card className="flex flex-col h-[55vh] overflow-hidden">
              <div className="h-1/3 bg-gradient-to-r from-black to-gray-400" />
              <CardHeader className="pb-1">
                <CardTitle className="text-lg">
                  Observability Plus is replacing Monitoring
                </CardTitle>
                <CardDescription className="text-sm">
                  Switch to the improved way to explore your data,
                  with natural language. Monitoring will no longer
                  be available on the Pro plan in November, 2025
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between mt-auto pt-1">
                <Button size="sm">Create Query +</Button>
                <Button variant="secondary" size="sm">Warning</Button>
              </CardFooter>
            </Card>

            {/* User Info Card */}
            <Card className="flex flex-col h-[55vh] overflow-auto">
              <CardHeader className="pb-1">
                <CardTitle className="text-lg">User Information</CardTitle>
                <CardDescription className="text-sm">
                  Please fill in your details below
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-2 overflow-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" size="sm" />
                  </div>
                  <div>
                    <Label>Role</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dev">Developer</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Framework</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="vue">Vue</SelectItem>
                      <SelectItem value="angular">Angular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Comments</Label>
                  <Textarea placeholder="Add any additional comments" />
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 pt-1">
                <Button size="sm">Submit</Button>
                <Button variant="outline" size="sm">Cancel</Button>
              </CardFooter>
            </Card>

          </div>

          {/* SECOND ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* Payment Card */}
            <Card className="flex flex-col h-[55vh] overflow-auto">
              <CardHeader>
                <CardTitle className="text-lg">Payment Method</CardTitle>
                <CardDescription>
                  All transactions are secure and encrypted
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4 overflow-auto">
                <div className="space-y-1">
                  <Label>Name on Card</Label>
                  <Input placeholder="srinivas" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-2">
                    <Label>Card Number</Label>
                    <Input placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="space-y-2">
                    <Label>CVV</Label>
                    <Input placeholder="123" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Month</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => (
                          <SelectItem key={i+1} value={(i+1).toString()}>
                            {(i+1).toString().padStart(2, "0")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Year</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="YYYY" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => {
                          const year = new Date().getFullYear() + i
                          return <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox id="same-address" />
                  <Label htmlFor="same-address">Same as shipping address</Label>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-4">
                  <Button className="flex-1">Submit</Button>
                  <Button variant="outline" className="flex-1">Cancel</Button>
                </div>
              </CardContent>
            </Card>

            {/* Two-Factor / Settings Card */}
            <Card className="flex flex-col h-[55vh] overflow-auto">
              <CardContent className="flex-1 space-y-6 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Two-factor authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Verify via email or phone number.
                    </p>
                  </div>
                  <Button size="sm">Enable</Button>
                </div>

                <div className="flex items-center justify-between border rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Your profile has been verified.</span>
                  </div>
                  <span className="text-muted-foreground">{">"}</span>
                </div>

                <div className="flex items-center gap-4">
                  <Separator className="flex-1" />
                  <span className="text-sm text-muted-foreground">Appearance Settings</span>
                  <Separator className="flex-1" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Compute Environment</h3>
                  <p className="text-sm text-muted-foreground">
                    Select the compute environment for your cluster.
                  </p>

                  <RadioGroup value={environment} onValueChange={setEnvironment} className="space-y-3">
                    {[
                      { value: "kubernetes", title: "Kubernetes", desc: "Run GPU workloads on a K8s configured cluster. This is the default." },
                      { value: "vm", title: "Virtual Machine", desc: "Access a VM configured cluster to run workloads. (Coming soon)" }
                    ].map((env) => (
                      <Label key={env.value} htmlFor={env.value} className="flex items-start gap-4 border rounded-xl p-4 cursor-pointer">
                        <RadioGroupItem value={env.value} id={env.value} />
                        <div>
                          <p className="font-medium">{env.title}</p>
                          <p className="text-sm text-muted-foreground">{env.desc}</p>
                        </div>
                      </Label>
                    ))}
                  </RadioGroup>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-medium">Number of GPUs</h4>
                  <p className="text-sm text-muted-foreground">You can add more later.</p>
                  <div className="flex items-center border rounded-xl w-fit overflow-hidden">
                    <button className="px-4 py-2 hover:bg-muted" onClick={() => setGpus(Math.max(1, gpus - 1))}>−</button>
                    <div className="px-6 py-2 border-x">{gpus}</div>
                    <button className="px-4 py-2 hover:bg-muted" onClick={() => setGpus(gpus + 1)}>+</button>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Wallpaper Tinting</h4>
                    <p className="text-sm text-muted-foreground">Allow the wallpaper to be tinted.</p>
                  </div>
                  <Switch checked={wallpaperTint} onCheckedChange={setWallpaperTint} />
                </div>

              </CardContent>
            </Card>

          </div>

        </div>
      </main>

      {/* RIGHT SIDEBAR: hidden on mobile */}
      <aside className="hidden xl:block w-64 border-l bg-background p-6 flex-none overflow-y-auto h-screen">
        <h2 className="text-sm mb-6">Preset</h2>
        <p className="font-semibold mb-4">Custom</p>
        <div className="space-y-4 text-sm">
          <div>
            <p className="text-muted-foreground">Component Library</p>
            <p className=" font-medium">Radix UI</p>
          </div>
          <div>
            <p className="text-muted-foreground">Style</p>
            <p className=" font-medium ">Nova</p>
          </div>
          <div>
            <p className="text-muted-foreground">Icon Library</p>
            <p className=" font-medium ">Lucide</p>
          </div>
          <div>
            <p className="text-muted-foreground">Font</p>
            <p className=" font-medium ">Inter</p>
          </div>
        </div>

      </aside>
    </div>
  )
}