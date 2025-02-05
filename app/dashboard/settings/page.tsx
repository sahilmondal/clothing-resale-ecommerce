import { getCurrentUser } from "@/lib/auth";
import { Form } from "../../../components/molecules/Form";
import { z } from "zod";

const settingsSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  address: z.string().min(10, "Please enter your full address").optional(),
  notifications: z.object({
    email: z.boolean(),
    push: z.boolean(),
  }),
});

const settingsFields = [
  {
    label: "Full Name",
    name: "name" as const,
    type: "text",
    placeholder: "Your full name",
  },
  {
    label: "Email",
    name: "email" as const,
    type: "email",
    placeholder: "Your email address",
  },
  {
    label: "Phone",
    name: "phone" as const,
    type: "tel",
    placeholder: "Your phone number",
  },
  {
    label: "Address",
    name: "address" as const,
    type: "textarea",
    placeholder: "Your full address",
  },
];

export default async function SettingsPage() {
  const user = await getCurrentUser();

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account preferences and personal information
        </p>
      </div>

      <div className="max-w-2xl">
        <Form
          onSubmit={async (data) => {
            "use server";
            // TODO: Implement settings update
            console.log("Settings update:", data);
          }}
          schema={settingsSchema}
          fields={settingsFields}
          submitText="Save Changes"
          defaultValues={{
            name: user?.name || "",
            email: user?.email || "",
            phone: "",
            address: "",
          }}
        />

        <hr className="my-8 border-gray-200" />

        {/* Password Change Section */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Change Password
          </h2>
          <Form
            onSubmit={async (data) => {
              "use server";
              // TODO: Implement password change
              console.log("Password change:", data);
            }}
            schema={z
              .object({
                currentPassword: z
                  .string()
                  .min(8, "Password must be at least 8 characters"),
                newPassword: z
                  .string()
                  .min(8, "Password must be at least 8 characters"),
                confirmPassword: z.string(),
              })
              .refine((data) => data.newPassword === data.confirmPassword, {
                message: "Passwords don't match",
                path: ["confirmPassword"],
              })}
            fields={[
              {
                label: "Current Password",
                name: "currentPassword" as const,
                type: "password",
                placeholder: "Enter your current password",
              },
              {
                label: "New Password",
                name: "newPassword" as const,
                type: "password",
                placeholder: "Enter your new password",
              },
              {
                label: "Confirm New Password",
                name: "confirmPassword" as const,
                type: "password",
                placeholder: "Confirm your new password",
              },
            ]}
            submitText="Change Password"
          />
        </div>

        {/* Delete Account Section */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-medium text-red-600">Delete Account</h2>
          <p className="mt-1 text-sm text-gray-500">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
          <button
            type="button"
            className="mt-4 px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50"
            onClick={() => {
              // TODO: Implement account deletion
              console.log("Delete account clicked");
            }}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
