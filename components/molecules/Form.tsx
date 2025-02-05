import { useForm, UseFormProps, FieldValues, Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../atoms/Button";

interface FormFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  error?: string;
}

interface FormProps<T extends FieldValues> extends UseFormProps<T> {
  onSubmit: (data: T) => void;
  schema: z.ZodType<T>;
  fields: FormFieldProps<T>[];
  submitText: string;
  className?: string;
}

export function Form<T extends FieldValues>({
  onSubmit,
  schema,
  fields,
  submitText,
  className = "",
  ...formProps
}: FormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<T>({
    ...formProps,
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-6 ${className}`}
    >
      {fields.map((field) => {
        const error = errors[field.name]?.message as string | undefined;

        return (
          <div key={field.name.toString()} className="space-y-1">
            <label
              htmlFor={field.name.toString()}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            <input
              {...register(field.name)}
              type={field.type || "text"}
              id={field.name.toString()}
              placeholder={field.placeholder}
              className={`input-field ${error ? "border-red-500" : ""}`}
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>
        );
      })}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Processing..." : submitText}
      </Button>
    </form>
  );
}

// Example usage:
/*
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const loginFields: FormFieldProps<LoginFormData>[] = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
  },
];

const LoginForm = () => {
  const handleSubmit = async (data: LoginFormData) => {
    // Handle login
    console.log(data);
  };

  return (
    <Form<LoginFormData>
      onSubmit={handleSubmit}
      schema={loginSchema}
      fields={loginFields}
      submitText="Log In"
    />
  );
};
*/
