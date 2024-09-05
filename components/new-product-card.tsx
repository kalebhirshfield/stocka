import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NewProductForm } from "./new-product-form";

export function NewProductCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-4xl font-bold">New Product</CardTitle>
      </CardHeader>
      <CardContent>
        <NewProductForm />
      </CardContent>
    </Card>
  );
}
