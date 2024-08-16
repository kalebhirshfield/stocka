"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Item = {
  item_id: number;
  item_name: string;
  item_cost: number;
  buy_price: number;
  quantity: number;
};

export const columns: ColumnDef<Item>[] = [
  {
    header: "ID",
    accessorKey: "item_id",
  },
  {
    header: "Name",
    accessorKey: "item_name",
  },
  {
    header: "Cost",
    accessorKey: "item_cost",
  },
  {
    header: "Buy Price",
    accessorKey: "buy_price",
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
  },
];
