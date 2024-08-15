import { NextResponse } from "next/server";
import prismadb from "@/db/prismadb";
import { getServerSession } from "next-auth/next";
import { without, isEmpty } from "lodash";

export async function GET(request: Request) {
  try {
    const session = await getServerSession();
    const email = session?.user?.email;

    const user = await prismadb.user.findMany({
      where: {
        email: email,
      },
    });
    const favoriteIds = user[0].favoriteIds;

    const movies = await prismadb.movie.findMany({
      where: {
        id: {
          in: favoriteIds,
        },
      },
    });
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Something went wrong: ${error}` },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    const email = session?.user?.email;
    const { movieId } = await request.json();

    const user = await prismadb.user.findMany({
      where: {
        email: email,
        favoriteIds: {
          has: movieId, // Verifica si `favoriteIds` contiene `favoriteId`
        },
      },
    });

    if (!isEmpty(user)) {
      const favoriteIds = user[0].favoriteIds;
      const updatedFavoriteIds = without(favoriteIds, movieId);
      const favoriteRemove = await prismadb.user.update({
        where: {
          email: email || "",
        },
        data: {
          favoriteIds: updatedFavoriteIds,
        },
      });
      return NextResponse.json(favoriteRemove, { status: 200 });
    } else {
      const favoriteAdded = await prismadb.user.update({
        where: {
          email: email || "",
        },
        data: {
          favoriteIds: {
            push: movieId,
          },
        },
      });
      return NextResponse.json(favoriteAdded, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: `Something went wrong: ${error}` },
      { status: 500 }
    );
  }
}
