import { NextResponse } from "next/server";
import prismadb from "@/db/prismadb";

export async function POST(request: Request) {
  try {
    // Parse JSON body
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Check for existing email
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { message: "Email does not exist" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Something went wrong: ${error}` },
      { status: 500 }
    );
  }
}
