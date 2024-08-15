/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function profiles() {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  // if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center bg-zinc-900 h-dvh">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div
            onClick={() => {
              router.push("/client/home");
            }}
          >
            <div className="group flex-row w-44 mx-auto">
              <div className="w-44 h-44 round flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <img src="/images/default-blue.png" alt="Profile" />
              </div>
              <div className="mt-4 text-gray-400 text-center group-hover:text-white">
                {session?.user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profiles;
