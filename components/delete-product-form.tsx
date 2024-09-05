"use client";

import { AlertDialogAction, AlertDialogCancel } from "./ui/alert-dialog";

export function DeleteProductForm() {
  return (
    <form className="flex flex-col space-y-4">
      <div className="flex flex-col-2 space-x-4">
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-gradient-to-bl from-destructive to-red-700 hover:bg-gradient-to-br text-white">
          Delete
        </AlertDialogAction>
      </div>
    </form>
  );
}
