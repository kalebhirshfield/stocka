"use client";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { FormEvent } from "react";

interface DeleteProductFormProps {
  id: string;
}

export function DeleteProductForm({ id }: DeleteProductFormProps) {
  const handleDeleteItem = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/delete-data", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      console.error("Error deleting item:", await response.json());
    } else {
      console.log("Deleted data:", await response.json());
      window.location.reload();
    }
  };

  return (
    <div>
      <AlertDialogHeader>
        <AlertDialogTitle>Warning</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your item
          from our database.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          onClick={handleDeleteItem}
          className="bg-gradient-to-bl from-destructive to-red-700 hover:bg-gradient-to-br text-white"
        >
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </div>
  );
}
