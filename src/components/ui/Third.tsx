import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2 } from "lucide-react"
import { useState } from "react"

const Third = () => {
  const [gpus, setGpus] = useState(1)
  const [environment, setEnvironment] = useState("kubernetes")

  return (
    <div className="h-full">
      <Card className="h-full flex flex-col rounded-2xl shadow-sm">
        <CardContent className="flex-1 space-y-6 p-6">

          {/* Two Factor */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Two-factor authentication</h3>
              <p className="text-sm text-muted-foreground">
                Verify via email or phone number.
              </p>
            </div>
            <Button size="sm">Enable</Button>
          </div>

          {/* Verified Row */}
          <div className="flex items-center justify-between border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Your profile has been verified.</span>
            </div>
            <span className="text-muted-foreground">{">"}</span>
          </div>

          {/* Appearance Divider */}
          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground">
              Appearance Settings
            </span>
            <Separator className="flex-1" />
          </div>

          {/* Compute Environment */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Compute Environment</h3>
            <p className="text-sm text-muted-foreground">
              Select the compute environment for your cluster.
            </p>

            <RadioGroup
              value={environment}
              onValueChange={setEnvironment}
              className="space-y-3"
            >
              <Label
                htmlFor="kubernetes"
                className="flex items-start gap-4 border rounded-xl p-4 cursor-pointer"
              >
                <RadioGroupItem value="kubernetes" id="kubernetes" />
                <div>
                  <p className="font-medium">Kubernetes</p>
                  <p className="text-sm text-muted-foreground">
                    Run GPU workloads on a K8s configured cluster. This is the default.
                  </p>
                </div>
              </Label>

              <Label
                htmlFor="vm"
                className="flex items-start gap-4 border rounded-xl p-4 cursor-pointer"
              >
                <RadioGroupItem value="vm" id="vm" />
                <div>
                  <p className="font-medium">Virtual Machine</p>
                  <p className="text-sm text-muted-foreground">
                    Access a VM configured cluster to run workloads. (Coming soon)
                  </p>
                </div>
              </Label>
            </RadioGroup>
          </div>

          <Separator />

          {/* Number of GPUs */}
          <div className="space-y-2">
            <h4 className="font-medium">Number of GPUs</h4>
            <p className="text-sm text-muted-foreground">
              You can add more later.
            </p>

            <div className="flex items-center border rounded-xl w-fit overflow-hidden">
              <button
                className="px-4 py-2 hover:bg-muted"
                onClick={() => setGpus((prev) => Math.max(1, prev - 1))}
              >
                −
              </button>

              <div className="px-6 py-2 border-x">{gpus}</div>

              <button
                className="px-4 py-2 hover:bg-muted"
                onClick={() => setGpus((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <Separator />

          {/* Wallpaper Tinting */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Wallpaper Tinting</h4>
              <p className="text-sm text-muted-foreground">
                Allow the wallpaper to be tinted.
              </p>
            </div>
            <Switch />
          </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default Third