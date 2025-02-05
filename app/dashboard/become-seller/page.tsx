import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Form } from "../../../components/molecules/Form";
import { z } from "zod";

const sellerApplicationSchema = z.object({
  businessName: z
    .string()
    .min(2, "Business name must be at least 2 characters"),
  businessType: z.enum(["individual", "company"], {
    errorMap: () => ({ message: "Please select a business type" }),
  }),
  description: z
    .string()
    .min(50, "Please provide a detailed description of your business"),
  taxId: z.string().optional(),
  bankAccount: z.object({
    accountName: z.string().min(2, "Account name is required"),
    accountNumber: z.string().min(8, "Please enter a valid account number"),
    bankName: z.string().min(2, "Bank name is required"),
    ifscCode: z.string().min(11, "Please enter a valid IFSC code"),
  }),
});

const sellerFields = [
  {
    label: "Business Name",
    name: "businessName" as const,
    type: "text",
    placeholder: "Your business name",
  },
  {
    label: "Business Type",
    name: "businessType" as const,
    type: "select",
    options: [
      { value: "individual", label: "Individual Seller" },
      { value: "company", label: "Registered Company" },
    ],
  },
  {
    label: "Business Description",
    name: "description" as const,
    type: "textarea",
    placeholder: "Tell us about your business and what you plan to sell",
  },
  {
    label: "Tax ID (Optional)",
    name: "taxId" as const,
    type: "text",
    placeholder: "Your GST number or tax ID",
  },
  {
    label: "Bank Account Name",
    name: "bankAccount.accountName" as const,
    type: "text",
    placeholder: "Name on bank account",
  },
  {
    label: "Account Number",
    name: "bankAccount.accountNumber" as const,
    type: "text",
    placeholder: "Your bank account number",
  },
  {
    label: "Bank Name",
    name: "bankAccount.bankName" as const,
    type: "text",
    placeholder: "Your bank name",
  },
  {
    label: "IFSC Code",
    name: "bankAccount.ifscCode" as const,
    type: "text",
    placeholder: "Bank IFSC code",
  },
];

export default async function BecomeSellerPage() {
  const user = await getCurrentUser();

  if (user?.role === "seller") {
    redirect("/dashboard/seller");
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Become a Seller</h1>
        <p className="mt-1 text-sm text-gray-500">
          Complete your seller application to start selling on our platform
        </p>
      </div>

      <div className="max-w-2xl">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-medium text-blue-900 mb-2">
            Benefits of Selling with Us
          </h2>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• Access to a large customer base of fashion enthusiasts</li>
            <li>• Easy-to-use seller dashboard and inventory management</li>
            <li>• Secure payments and timely settlements</li>
            <li>• Free product photography tips and guidelines</li>
            <li>• Dedicated seller support team</li>
          </ul>
        </div>

        <Form
          onSubmit={async (data) => {
            "use server";
            // TODO: Implement seller application submission
            console.log("Seller application:", data);
          }}
          schema={sellerApplicationSchema}
          fields={sellerFields}
          submitText="Submit Application"
        />

        <div className="mt-6 text-sm text-gray-500">
          By submitting this application, you agree to our{" "}
          <a href="/terms" className="text-primary-600 hover:text-primary-500">
            Seller Terms
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="text-primary-600 hover:text-primary-500"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
