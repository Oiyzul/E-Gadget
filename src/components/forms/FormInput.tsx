import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "../ui/form";

type TProps = {
  control: any;
  name: string;
  label?: string;
  placeholder: string;
  type?: string;
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
  label = "",
  required = true,
}: TProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex items-center gap-2">
          {label && <label className="min-w-fit">{label}</label>}
          <FormControl>
            <input
              placeholder={placeholder}
              {...field}
              required={required}
              className="w-full outline-none border-b-2"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
