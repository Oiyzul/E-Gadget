import { cn } from "@/lib/utils";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TProps = {
  control: any;
  name: string;
  label?: string;
  placeholder: string;
  type?: string;
  textArea?: boolean;
  errorMessage?: string;
  successMessage?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  as?: React.ElementType;
  className?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  control,
  name,
  placeholder,
  type = "text",
  label = "",
  required = false,
  textArea = false,
  disabled = false,
  className = "",
}: TProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-2">
          {label && <Label className="min-w-fit">{label}</Label>}
          <FormControl>
            {!textArea ? (
              <Input
                placeholder={placeholder}
                {...field}
                required={required}
                type={type}
                disabled={disabled}
                className={cn("w-full focus:outline-none", className)}
              />
            ) : (
              <Textarea
                className="w-full outline-none border-b-2"
                placeholder={placeholder}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
