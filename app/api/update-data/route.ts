import { NextRequest, NextResponse } from "next/server";
import { createClerkSupabaseClientSsr } from "@/utils/supabase/client";

export async function PUT(req: NextRequest) {
  try {
    const { id, name, cost, price, quantity } = await req.json();
    const supabase = createClerkSupabaseClientSsr();

    const { data, error } = await supabase
      .from("item_details")
      .update({
        item_name: name,
        item_cost: cost,
        buy_price: price,
        quantity: quantity,
      })
      .eq("item_id", id)
      .select();

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json(
        { error: "Error updating item" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Request processing error:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
