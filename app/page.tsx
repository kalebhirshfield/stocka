import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { NewProductCard } from "@/components/new-product-card";
import { createClerkSupabaseClientSsr } from "@/utils/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Edit2 } from "lucide-react";
import { Trash2 } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { XCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DeleteProductForm } from "@/components/delete-product-form";

async function fetchItems() {
  const supabase = createClerkSupabaseClientSsr();

  const { data: item_details, error } = await supabase
    .from("item_details")
    .select();
  if (error) {
    console.error("Error fetching item details:", error);
  }
  console.log("Fetched data:", item_details);

  return item_details;
}

export default async function Home() {
  let items = await fetchItems();

  return (
    <main>
      <SignedOut>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-10">
          <Skeleton className="h-[300px] rounded-xl" />
          <Skeleton className="h-[300px] rounded-xl" />
          <Skeleton className="h-[300px] rounded-xl" />
          <Skeleton className="h-[300px] rounded-xl" />
          <Skeleton className="h-[300px] rounded-xl" />
          <Skeleton className="h-[300px] rounded-xl" />
          <Skeleton className="h-[300px] rounded-xl" />
          <Skeleton className="h-[300px] rounded-xl" />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-10">
          <NewProductCard />
          {items ? (
            items.map((item) => (
              <Card key={item.item_id}>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">
                    {item.item_name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="cost">Item cost</Label>
                      <p className="text-2xl font-bold text-muted-foreground">
                        £{item.item_cost}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="price">Buy price</Label>
                      <p className="text-2xl font-bold text-muted-foreground">
                        £{item.buy_price}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="quantity">Quantity</Label>
                      <p className="text-2xl font-bold text-muted-foreground">
                        {item.quantity}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="profit">Profit</Label>
                      {item.buy_price > item.item_cost ? (
                        <CheckCircle2 color="green" />
                      ) : (
                        <XCircle color="#ef4444" />
                      )}
                    </div>
                    <Button
                      variant="outline"
                      className="bg-gradient-to-bl from-primary to-yellow-600 hover:bg-gradient-to-br"
                    >
                      <Edit2 color="white" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Button
                          variant="outline"
                          className="bg-gradient-to-bl from-destructive to-red-700 hover:bg-gradient-to-br w-fullThis action cannot be undone. This will permanently delete your account
        and remove your data from our servers."
                        >
                          <Trash2 color="white" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Warning</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your item from our database.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <DeleteProductForm />
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>No items available</p>
          )}
        </div>
      </SignedIn>
    </main>
  );
}
