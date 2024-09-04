import { NavigationBar } from "@/components/navigation-bar";
import { NewProductCard } from "@/components/new-product-card";
import { Title } from "@/components/title";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: item_details } = await supabase.from("item_details").select();

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
        </div>
      </div>
    </div>
  );
}
