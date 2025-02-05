import { Form } from "../../../components/molecules/Form";
import { z } from "zod";
import Link from "next/link";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const forgotPasswordFields = [
  {
    label: "Email",
    name: "email" as const,
    type: "email",
    placeholder: "Enter your email address",
  },
];

export default function ForgotPasswordPage() {
  const handleSubmit = async (data: ForgotPasswordFormData) => {
    // TODO: Implement password reset functionality
    console.log("Forgot password request:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Reset Your Password</h1>
          <p className="mt-2 text-gray-600">
            Enter your email address and we&apos;ll send you a link to reset
            your password
          </p>
        </div>

        <div className="mt-8 bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10">
          <Form<ForgotPasswordFormData>
            onSubmit={handleSubmit}
            schema={forgotPasswordSchema}
            fields={forgotPasswordFields}
            submitText="Send Reset Link"
          />

          <div className="mt-6 text-center text-sm">
            <Link
              href="/auth/login"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Back to Sign In
            </Link>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="font-medium text-primary-600 hover:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
