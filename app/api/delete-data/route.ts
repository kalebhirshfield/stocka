import { NextRequest, NextResponse } from "next/server";
import { createClerkSupabaseClientSsr } from "@/utils/supabase/client";

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const supabase = createClerkSupabaseClientSsr();

    const { data, error } = await supabase
      .from("item_details")
      .delete()
      .eq("item_id", id)
      .select();

    if (error) {
      console.error("Supabase delete error:", error);
      return NextResponse.json(
        { error: "Error deleting item" },
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
