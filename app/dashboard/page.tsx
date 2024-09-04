import { NavigationBar } from "@/components/navigation-bar";
import { NewProductCard } from "@/components/new-product-card";
import { Title } from "@/components/title";
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

export default async function Page() {
  const supabase = createClerkSupabaseClientSsr();

  const { data: item_details, error } = await supabase
    .from("item_details")
    .select();
  if (error) {
    console.error("Error fetching item details:", error);
  }
  console.log("Item details:", item_details);

  return (
    <div>
      <div className="p-5">
        <div className="flex flex-row">
          <NavigationBar />
          <h1 className="text-primary text-4xl pl-5">
            <Title />
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-10">
          <NewProductCard />
          {item_details ? (
            item_details.map((item) => (
              <Card key={item.item_id}>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">
                    {item.item_name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full items-center gap-4">
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
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-2xl font-semibold">
                    {item.buy_price > item.item_cost ? (
                      <p>
                        Currently making a{" "}
                        <span className="text-primary">profit</span>! 🎉
                      </p>
                    ) : (
                      <p>Not yet making a profit.</p>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p>No items available</p>
          )}
        </div>
      </div>
    </div>
  );
}
