import { NextResponse } from "next/server";
import { z } from "zod";

// TODO: Replace with actual database implementation
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const users = new Map<string, any>();

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = registerSchema.parse(body);

    // Check if user already exists
    if (users.has(validatedData.email)) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // TODO: Hash password before storing
    const newUser = {
      id: crypto.randomUUID(),
      name: validatedData.name,
      email: validatedData.email,
      password: validatedData.password, // In production, this should be hashed
      role: "user",
      createdAt: new Date().toISOString(),
    };

    // Store user
    users.set(validatedData.email, newUser);

    // Return success without sensitive data
    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

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
