"use client";

import { FormInput } from "@/components";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import UploadImage from "@/components/UploadImage";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { TProduct } from "../../../../types";

type TProps = {
  form: UseFormReturn<TProduct, any, undefined>;
  onSubmit: (data: TProduct) => void;
};


const ProductForm = ({ form, onSubmit }: TProps) => {
  const { isSubmitting } = form.formState;
  const [isUploading, setIsUploading] = useState(false);
  const [thumbnailUrls, setThumbnailUrls] = useState<string[]>([]);
  const ikUploadRef = useRef<HTMLInputElement>(null);

  const { fields, append, remove } = useFieldArray({
    name: "features",
    control: form.control,
  } as any);

  const {
    fields: colorFields,
    append: appendColor,
    remove: removeColor,
  } = useFieldArray({
    name: "colors",
    control: form.control,
  } as any);

  const { fields: imageFields, append: appendImage } = useFieldArray({
    name: "images",
    control: form.control,
  } as any);

  const onSuccess = (res: any) => {
    appendImage(res.url);
    setThumbnailUrls((prev) => [...prev, res.thumbnailUrl!]);
    setIsUploading(false);
  };

  // console.log(form.getValues());
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:p-4"
      >
        <FormInput
          control={form.control}
          name="name"
          placeholder="Enter product name"
          label="Product Name"
        />
        <FormInput
          control={form.control}
          name="brand"
          placeholder="Enter brand name"
          label="Brand Name"
        />
        <FormInput
          control={form.control}
          name="model"
          placeholder="Enter model name"
          label="Model Name"
        />
        <FormInput
          control={form.control}
          name="category"
          placeholder="Enter category"
          label="Category"
        />
        <FormInput
          control={form.control}
          name="price"
          placeholder="Enter price"
          label="Product Price"
          type="number"
        />
        <FormInput
          control={form.control}
          name="description"
          placeholder="Description of the product"
          label="Product Description"
          textArea={true}
        />
        <div>
          {/* <FormInput
            control={form.control}
            name="features"
            placeholder="Features of the product"
            label="Product Features"
            disabled
          /> */}
          <div className="flex flex-wrap gap-2">
            {fields.map((field, index) => (
              <FormField
                control={form.control}
                key={`features-${index}`}
                name={`features.${index}`}
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 flex-wrap">
                    <FormLabel className={cn("sr-only")}>Features</FormLabel>

                    <FormControl>
                      <div className="flex gap-1">
                        <Input {...field} className="w-full md:w-fit" />
                        <Button
                          variant={"outline"}
                          className="p-0.5 text-red-500"
                          onClick={() => remove(index)}
                        >
                          <X />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className=""
              onClick={() => append("")}
            >
              Add Feature
            </Button>
          </div>
        </div>

        <FormInput
          control={form.control}
          name="variant"
          placeholder="Variant of the product"
          label="Product Variant"
        />

        <div>
          {/* <FormInput
            control={form.control}
            name="colors"
            placeholder="Colors of the product"
            label="Product Colors"
            disabled={true}
          /> */}

          <div className="flex flex-wrap gap-2">
            {colorFields.map((field, index) => (
              <FormField
                control={form.control}
                key={`colors-${index}`}
                name={`colors.${index}`}
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 flex-wrap">
                    <FormLabel className={cn("sr-only")}>Color</FormLabel>

                    <FormControl>
                      <div className="flex gap-1">
                        <Input {...field} className="w-full md:w-fit" />
                        <Button
                          variant={"outline"}
                          className="p-0.5 text-red-500"
                          onClick={() => removeColor(index)}
                        >
                          <X />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className=""
              onClick={() => appendColor("")}
            >
              Add Color
            </Button>
          </div>
        </div>

        <FormInput
          control={form.control}
          name="countInStock"
          placeholder="Product stock"
          label="Product Stock"
          type="number"
        />
        <FormInput
          control={form.control}
          name="isFlashsale"
          placeholder="True or false"
          label="Flashsale"
        />
        <FormInput
          control={form.control}
          name="isFeatured"
          placeholder="True or false"
          label="Featured"
        />
        <FormInput
          control={form.control}
          name="discount"
          placeholder="Discount of the product"
          label="Discount"
          type="number"
        />

        <div className="my-2">
          <div className="flex gap-2 items-center">
            {imageFields.map((field, index) => (
              <FormField
                control={form.control}
                key={`images-${index}`}
                name={`images.${index}`}
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 flex-wrap">
                    <FormLabel className={cn("sr-only")}>Image</FormLabel>

                    <FormControl>
                      <div className="flex gap-1">
                        <UploadImage
                          field={field}
                          isUploading={isUploading}
                          setIsUploading={setIsUploading}
                          onSuccess={onSuccess}
                          ref={ikUploadRef}
                        />
                        <Button
                          type="button"
                          variant={"outline"}
                          size={"sm"}
                          className="text-blue-500"
                          onClick={() => ikUploadRef.current?.click()}
                        >
                          {isUploading ? "Uploading..." : "Upload"}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className=""
                onClick={() => appendImage("")}
              >
                Add Image
              </Button>
            </div>
          </div>
          <div className="relative flex flex-wrap gap-2">
            {thumbnailUrls &&
              thumbnailUrls.map((img) => (
                <div className="w-20 h-20" key={img.substring(0, 10)}>
                  <img src={img} alt="Preview" className="w-full h-full" />
                </div>
              ))}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || isUploading}
          className="mt-8"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;
