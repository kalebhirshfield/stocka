import { NavigationBar } from "@/components/navigation-bar";
import { Item, columns } from "./columns";
import { DataTable } from "./data-table";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

async function fetchData() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: item_details } = await supabase.from("item_details").select();

  return (
    <ul>
      {item_details?.map((details) => (
        <li>{details}</li>
      ))}
    </ul>
  );
}

export default async function Page() {
  const data = await fetchData();

  return (
    <div>
      <div className="p-5">
        <NavigationBar />
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
