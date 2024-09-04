import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";

export function NewProductCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-4xl font-bold">New Product</CardTitle>
        <Button variant="outline">
          <PlusIcon />
        </Button>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="item_name" placeholder="Name of your item" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="cost">Item cost</Label>
              <Input
                id="item_cost"
                placeholder="Price that the item was bought for"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Buy price</Label>
              <Input
                id="buy_price"
                placeholder="Price that the item is selling for"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                placeholder="Number of items you are selling"
              />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
