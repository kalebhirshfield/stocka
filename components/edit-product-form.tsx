"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Product = {
  id: string;
  name: string;
  cost: string;
  price: string;
  quantity: string;
};

export function EditProductForm({
  initialData,
  onClose = () => {},
}: {
  initialData: Product;
  onClose?: () => void;
}) {
  const [name, setName] = useState(initialData.name);
  const [cost, setCost] = useState(initialData.cost);
  const [price, setPrice] = useState(initialData.price);
  const [quantity, setQuantity] = useState(initialData.quantity);

  const handleUpdateItem = async (event: FormEvent) => {
    event.preventDefault();

    if (!name || !cost || !price || !quantity) {
      alert("Please fill in all fields.");
      return;
    }

    const response = await fetch("/api/update-data", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: initialData.id,
        name,
        cost,
        price,
        quantity,
      }),
    });

    if (!response.ok) {
      console.error("Error updating item:", await response.json());
    } else {
      console.log("Updated data:", await response.json());
      onClose();
      window.location.reload();
    }
  };

  return (
    <form onSubmit={handleUpdateItem}>
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
        <Button
          type="submit"
          variant="outline"
          className="bg-gradient-to-bl from-primary to-yellow-600 hover:bg-gradient-to-br text-background"
        >
          Confirm
        </Button>
      </div>
    </form>
  );
}
