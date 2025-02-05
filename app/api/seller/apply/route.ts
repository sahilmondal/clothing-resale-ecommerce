import { NextResponse } from "next/server";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

const sellerApplicationSchema = z.object({
  businessName: z.string().min(2),
  businessType: z.enum(["individual", "company"]),
  description: z.string().min(50),
  taxId: z.string().optional(),
  bankAccount: z.object({
    accountName: z.string().min(2),
    accountNumber: z.string().min(8),
    bankName: z.string().min(2),
    ifscCode: z.string().min(11),
  }),
});

// TODO: Replace with actual database implementation
const applications = new Map<string, any>();

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = sellerApplicationSchema.parse(body);

    // Check if user already has a pending application
    if (applications.has(session.user.email!)) {
      return NextResponse.json(
        { message: "Application already submitted" },
        { status: 400 }
      );
    }

    // Store application
    const application = {
      ...validatedData,
      userId: session.user.email,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    applications.set(session.user.email!, application);

    // Return success
    return NextResponse.json(
      {
        message: "Application submitted successfully",
        application: {
          businessName: application.businessName,
          status: application.status,
          createdAt: application.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Seller application error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation error", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const application = applications.get(session.user.email!);

    if (!application) {
      return NextResponse.json(
        { message: "No application found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      application: {
        businessName: application.businessName,
        status: application.status,
        createdAt: application.createdAt,
      },
    });
  } catch (error) {
    console.error("Get application error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
