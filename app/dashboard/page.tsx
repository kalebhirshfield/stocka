import { NavigationBar } from "@/components/navigation-bar";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

async function fetchData() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: item_details } = await supabase.from("item_details").select();

  return item_details;
}

export default async function Page() {
  const data = await fetchData();

  return (
    <div>
      <div className="p-5">
        <NavigationBar />
      </div>
    </div>
  );
}
