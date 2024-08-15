import { NextResponse } from "next/server";
import prismadb from "@/db/prismadb";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const movieId = params.id;

    if (typeof movieId !== "string") {
      throw new Error("Invalid Id");
    }

    if (!movieId) {
      throw new Error("Missing Id");
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    return NextResponse.json(movie, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Something went wrong: ${error}` },
      { status: 500 }
    );
  }
}
