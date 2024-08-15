import { NextResponse } from "next/server";
import prismadb from "@/db/prismadb";

export async function GET(request: Request) {
  try {
    const movies = await prismadb.movie.findMany();
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Something went wrong: ${error}` },
      { status: 500 }
    );
  }
}
