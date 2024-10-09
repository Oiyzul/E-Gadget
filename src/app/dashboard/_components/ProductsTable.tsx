"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import { TProduct } from "../../../../types";
import EditProductModal from "./EditProductModal";

const ProductsTable = () => {
  const [open, setOpen] = useState(false);
  const [deleteProduct] = useDeleteProductMutation();
  const { data: { data: products } = [], isLoading } = useGetAllProductsQuery(
    {}
  );

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
  };

  if (isLoading) return <div>Loading...</div>;
  console.log(products);
  return (
    <MaxWidthWrapper>
      <h1 className="text-2xl font-semibold mb-5">All products</h1>
      <Table>
        <TableCaption>A list of your recent products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Colors</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product: TProduct) => {
            const {
              _id,
              name,
              images,
              category,
              brand,
              model,
              price,
              discount,
              colors,
            } = product;
            console.log(colors);
            return (
              <TableRow key={`product-${_id}`}>
                <TableCell className="font-medium">{_id}</TableCell>
                <TableCell>
                  <img src={images[0]} alt={name} width={50} height={50} />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{category}</TableCell>
                <TableCell>{brand}</TableCell>
                <TableCell>{model}</TableCell>
                <TableCell>
                  {colors?.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{discount}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <Plus
                          strokeWidth={2.5}
                          className="text-green-500 border-2 rounded border-green-500 cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[525px] max-h-screen overflow-y-scroll">
                        <DialogHeader>
                          <DialogTitle>Edit Product</DialogTitle>
                        </DialogHeader>

                        <EditProductModal data={product} setOpen={setOpen} />
                      </DialogContent>
                    </Dialog>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Trash
                          strokeWidth={3}
                          className="text-red-500 cursor-pointer border-2 border-red-500 rounded p-0.5"
                        />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure to delete this product?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This will completely remove the product.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(_id as string)}
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>{products?.length}</TableCell>
            <TableCell className="text-right">
              Out of {products?.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </MaxWidthWrapper>
  );
};

export default ProductsTable;
