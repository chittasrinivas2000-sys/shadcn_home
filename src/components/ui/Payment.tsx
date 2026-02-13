import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const Payment=()=>{
    return(
        <div>
            <Card className="max-w-md w-full mx-auto rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Payment Method</CardTitle>
        <CardDescription>
          All transactions are secure and encrypted
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">

        {/* Name on Card */}
        <div className="space-y-2">
          <Label>Name on Card</Label>
          <Input placeholder="srinivas" />
        </div>

        {/* Card Number + CVV */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 space-y-2">
            <Label>Card Number</Label>
            <Input placeholder="1234 5678 9012 3456" />
            <p className="text-sm text-muted-foreground">
              Enter your 16-digit number.
            </p>
          </div>

          <div className="space-y-2">
            <Label>CVV</Label>
            <Input placeholder="123" />
          </div>
        </div>

        {/* Month + Year */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Month</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="MM" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {(i + 1).toString().padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Year</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="YYYY" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => {
                  const year = new Date().getFullYear() + i
                  return (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>
        </div>

        <hr />

        {/* Billing Address */}
        <div className="space-y-2">
          <h3 className="font-semibold">Billing Address</h3>
          <p className="text-sm text-muted-foreground">
            The billing address associated with your payment method
          </p>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox id="same-address" />
            <Label htmlFor="same-address">
              Same as shipping address
            </Label>
          </div>
        </div>

        <hr />

        {/* Comments */}
        <div className="space-y-2">
          <Label>Comments</Label>
          <Input placeholder="comments" />
        </div>
        <div>
            <Button className="mr-4">Submit</Button>
             <Button className="bg-white text-black">Cancel</Button>
        </div>

      </CardContent>
    </Card>
        </div>
    )
}
export default Payment