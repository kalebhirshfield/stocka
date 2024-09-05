"use client";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

export function DeleteProductForm() {
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
        <AlertDialogAction className="bg-gradient-to-bl from-destructive to-red-700 hover:bg-gradient-to-br text-white">
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </div>
  );
}
