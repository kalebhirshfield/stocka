import { SignedIn, SignedOut } from "@clerk/nextjs";
import { createClerkSupabaseClientSsr } from "@/utils/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  XCircle,
  CheckCircle2,
  Trash2,
  Menu,
  Edit2,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DeleteProductForm } from "@/components/delete-product-form";
import { NewProductForm } from "@/components/new-product-form";
import { Separator } from "@/components/ui/separator";
import { syne } from "./layout";

async function fetchItems(searchQuery: string) {
  const supabase = createClerkSupabaseClientSsr();

  let query = supabase.from("item_details").select();
  if (searchQuery) {
    query = query.ilike("item_name", `%${searchQuery}%`);
  }

  const { data: item_details, error } = await query;
  if (error) {
    console.error("Error fetching item details:", error);
  }
  console.log("Fetched data:", item_details);

  return item_details;
}

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const searchQuery = searchParams.search || "";
  let items = await fetchItems(searchQuery);

  return (
    <main>
      <SignedOut>
        <div className="w-full h-[80lvh] pt-10 flex text-center justify-center items-center sm:text-lg md:text-xl lg:text-4xl transition-all">
          <div className={syne.className}>
            <h1 className="text-primary text-4xl block md:hidden">STOCKA</h1>
            <div>TRACK WHAT YOU OWN</div>
            <div>MAKE A PROFIT</div>
            <Link href="/sign-up">
              <div className="underline hover:text-primary cursor-pointer">
                Join now
              </div>
            </Link>
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-10">
          <Dialog>
            <DialogTrigger>
              <Button
                type="submit"
                variant="outline"
                className="bg-gradient-to-bl from-primary to-yellow-600 hover:bg-gradient-to-br h-full w-full"
              >
                <PlusIcon className="stroke-background size-1/4" />
              </Button>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>New Product</DialogTitle>
                  <DialogDescription>
                    Enter all the details of your item(s).
                  </DialogDescription>
                </DialogHeader>
                <NewProductForm />
              </DialogContent>
            </DialogTrigger>
          </Dialog>
          {items ? (
            items.map((item) => (
              <Card key={item.item_id}>
                <CardHeader className="flex flex-row justify-between">
                  <CardTitle className="text-4xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.item_name}
                  </CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="outline">
                        <Menu />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col space-y-1">
                      <Button className="w-full">
                        <Edit2 />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger className="w-full">
                          <Card className="bg-gradient-to-bl from-destructive to-red-700 hover:bg-gradient-to-br h-10 rounded-md flex flex-col justify-center">
                            <div className="flex flex-row justify-center">
                              <Trash2 className="stroke-background" />
                            </div>
                          </Card>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <DeleteProductForm id={item.item_id} />
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <Separator className="mb-5" />
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
