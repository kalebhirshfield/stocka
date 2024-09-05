"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";

export function NewProductForm() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddItem = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/insert-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, cost, price, quantity }),
    });

    if (!response.ok) {
      console.error("Error inserting item details:", await response.json());
    } else {
      console.log("Inserted data:", await response.json());
    }
  };

  return (
    <form onSubmit={handleAddItem}>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Name of your item"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="cost">Item cost</Label>
          <Input
            id="cost"
            name="cost"
            placeholder="Price that the item was bought for"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="price">Buy Price</Label>
          <Input
            id="price"
            name="price"
            placeholder="Price that the item is sold for"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            name="quantity"
            placeholder="Quantity of the item"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="grid w-full items-center pt-4">
        <Button type="submit" variant="outline">
          <PlusIcon />
        </Button>
      </div>
    </form>
  );
}
