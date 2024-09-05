import { NextRequest, NextResponse } from "next/server";
import { createClerkSupabaseClientSsr } from "@/utils/supabase/client";

export async function POST(req: NextRequest) {
  try {
    const { name, cost, price, quantity } = await req.json();
    const supabase = createClerkSupabaseClientSsr();

    const { data: item_details, error } = await supabase
      .from("item_details")
      .insert({
        item_name: name,
        item_cost: cost,
        buy_price: price,
        quantity: quantity,
      });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Error inserting item details" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data: item_details }, { status: 200 });
  } catch (error) {
    console.error("Request processing error:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
